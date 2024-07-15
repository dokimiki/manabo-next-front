"use client";

import aspida, { type FetchConfig, HTTPError } from "@aspida/fetch";
import { Box } from "@radix-ui/themes";
import { type AspidaClient } from "aspida";
import { consola } from "consola/browser";
import DOMPurify from "isomorphic-dompurify";
import { useRouter } from "next/navigation";
import { enqueueSnackbar, SnackbarProvider } from "notistack";
import { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import api from "@/src/api/$api";
import { isLoggedIn } from "@/src/libs/auth";

export default function Login(): JSX.Element {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    const apiClient = api(aspida(fetch, { throwHttpErrors: true, mode: "cors" }) as AspidaClient<FetchConfig>);
    const router = useRouter();

    const [isSending, setIsSending] = useState<boolean>(false);
    const [loginError, setLoginError] = useState<string>("");

    /* すでにログインしているかの判定 */
    useEffect(() => {
        const crumbedCookie = localStorage.getItem("manato:crumbed_cookie");
        if (crumbedCookie !== null) {
            apiClient.v1.manabo.proxy
                .$post({
                    body: {
                        path: "/",
                        method: "GET",
                        crumbed_cookie: crumbedCookie,
                    },
                })
                .then((res) => {
                    localStorage.setItem("manato:crumbed_cookie", `${res.crumbed_cookie}`);
                    if (isLoggedIn(`${res.body}`)) {
                        consola.success("ログインされました");
                        router.push("/manato");
                    }
                })
                .catch(async (e) => {
                    consola.error(e);
                });
        }
    }, [apiClient, router]);

    const handleAction = (formData: FormData): void => {
        setIsSending(true);

        const username = formData.get("username");
        const password = formData.get("password");

        consola.info("ログインAPIを呼び出しています...");
        apiClient.v1.auth.login
            .$post({
                body: {
                    username: username as string,
                    password: password as string,
                },
                config: {},
            })
            .then(async (res) => {
                // ログイン成功時の処理
                consola.success("ログインに成功しました");

                localStorage.setItem("manato:crumbed_cookie", `${res.crumbed_cookie}`);

                router.push("/manato");
            })
            .catch(async (e) => {
                // ログイン失敗時の処理
                enqueueSnackbar("ログインに失敗しちゃった...", { variant: "error" });
                if (e instanceof HTTPError) {
                    const errorMessage = `${(await e.response.json()).message}`;
                    consola.error("ログインに失敗しました:", errorMessage);
                    if (e.response.status === 401) {
                        // 認証エラー
                        setLoginError("学籍番号かパスワードが間違っているみたい...<br />入力しなおしてみてほしいな！");
                    } else if (e.response.status === 500 && errorMessage === "manabo is under maintenance") {
                        // メンテナンス中
                        setLoginError("manabo本体がメンテナンス中だよ...<br />一晩待ってからログインしてほしいな！");
                    } else {
                        // その他のエラー
                        setLoginError(
                            `あれれ？難しい問題が起きたみたい...<br />この画面のスクリーンショットをサイトの管理者におくってほしいな...<br />Status: ${e.response.status}<br />Message: ${DOMPurify.sanitize(errorMessage)}`,
                        );
                    }
                } else {
                    const errorMessage = `${e}`;
                    consola.error("API呼び出しに失敗しました:", errorMessage);
                    setLoginError(
                        `あれれ？難しい問題が起きたみたい...<br />この画面のスクリーンショットをサイトの管理者におくってほしいな...<br />Message: ${DOMPurify.sanitize(errorMessage)}`,
                    );
                }
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <Box className="w-full h-screen flex justify-center items-center">
            <SnackbarProvider />
            <LoginForm handleAction={handleAction} isSending={isSending} loginError={loginError} />
        </Box>
    );
}
