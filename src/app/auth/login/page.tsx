"use client";

import aspida, { HTTPError } from "@aspida/fetch";
import { Box } from "@radix-ui/themes";
import { consola } from "consola/browser";
import { enqueueSnackbar, SnackbarProvider } from "notistack";
import { useState } from "react";
import LoginForm from "./LoginForm";
import api from "@/src/api/$api";

export default function Login(): JSX.Element {
    const apiClient = api(aspida(fetch, { throwHttpErrors: true, mode: "cors" }));

    const [isSending, setIsSending] = useState<boolean>(false);
    const [loginError, setLoginError] = useState<string>("");

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
            .then(() => {
                // ログイン成功時の処理
                consola.success("ログインに成功しました");
            })
            .catch(async (e) => {
                // ログイン失敗時の処理
                enqueueSnackbar("ログインに失敗しちゃった...", { variant: "error" });
                if (e instanceof HTTPError) {
                    const errorMessage = (await e.response.json()).message;
                    consola.error("ログインに失敗しました:", errorMessage);
                    if (e.response.status === 401) {
                        // 認証エラー
                        setLoginError("学籍番号かパスワードが間違っているみたい...<br />入力しなおしてみてほしいな！");
                    } else {
                        // その他のエラー
                        setLoginError(
                            `あれれ？難しい問題が起きたみたい...<br />この画面のスクリーンショットをサイトの管理者におくってほしいな...<br />Status: ${e.response.status}<br />Message: ${errorMessage}`,
                        );
                    }
                } else {
                    consola.error("API呼び出しに失敗しました:", e);
                    setLoginError(
                        `あれれ？難しい問題が起きたみたい...<br />この画面のスクリーンショットをサイトの管理者におくってほしいな...<br />Message: ${e}`,
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
