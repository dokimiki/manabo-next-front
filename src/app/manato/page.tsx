"use client";

import aspida, { HTTPError, type FetchConfig } from "@aspida/fetch";
import { type AspidaClient } from "aspida";
import { useEffect, useState } from "react";
import api from "@/src/api/$api";

export default function Page(): JSX.Element {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    const apiClient = api(aspida(fetch, { throwHttpErrors: false, mode: "cors" }) as AspidaClient<FetchConfig>);

    const [userName, setUserName] = useState<string>("");

    const extractUsernameFromDOM = (dom: string): string => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(dom, "text/html");
        const name = doc.querySelector(".user-icon")?.textContent ?? "";
        return name;
    };

    useEffect(() => {
        (async () => {
            const crumbedCookie = localStorage.getItem("manato:crumbed_cookie");

            apiClient.v1.manabo.proxy
                .$post({
                    body: {
                        path: "/",
                        method: "GET",
                        crumbed_cookie: crumbedCookie ?? undefined,
                    },
                })
                .then((res) => {
                    localStorage.setItem("manato:crumbed_cookie", `${res.crumbed_cookie}`);
                    const n = extractUsernameFromDOM(`${res.body}`);
                    setUserName(n);
                })
                .catch(async (e) => {
                    if (e instanceof HTTPError) {
                        // エラー処理
                    } else {
                        // エラー処理
                    }
                })
                .finally(() => {});
        })()
            .then(() => {})
            .catch(() => {});
    });

    return (
        <div>
            <h1>ここにmanatoが出てくる予定</h1>
            <p>{userName}こんにちは！</p>
        </div>
    );
}
