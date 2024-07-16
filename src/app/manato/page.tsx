"use client";

import aspida, { type FetchConfig } from "@aspida/fetch";
import { Box, Tabs, Text } from "@radix-ui/themes";
import { type AspidaClient } from "aspida";
import consola from "consola";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import api from "@/src/api/$api";
import { ClassCard } from "@/src/components/ClassCard";
import { isLoggedIn } from "@/src/libs/auth";

export default function Page(): JSX.Element {
    const router = useRouter();
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    const apiClient = api(aspida(fetch, { throwHttpErrors: false, mode: "cors" }) as AspidaClient<FetchConfig>);

    const [userName, setUserName] = useState<string>("");
    console.log(userName);

    const [nowOpenClass, setNowOpenClass] = useState<string>("");

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
                    if (!isLoggedIn(`${res.body}`)) {
                        consola.info("ログアウトされました");
                        router.push("/auth/login");
                        return;
                    }
                    const n = extractUsernameFromDOM(`${res.body}`);
                    setUserName(n);
                })
                .catch(async (e) => {
                    consola.error(e);
                });
        })()
            .then(() => {})
            .catch(() => {});
    }, [apiClient, router, setUserName]);

    useEffect(() => {
        setNowOpenClass("インターミディエイト英語コミュニケーションＡ(林　淑蕙)");
    }, [setNowOpenClass]);

    return (
        <div>
            {/* <p>{userName}こんにちは！</p> */}

            <Box mb="4" mt="4" mx="2">
                <NowOpenClass openClassName={nowOpenClass} />
            </Box>

            <Box mb="4" mx="2">
                <Tabs.Root defaultValue="account">
                    <Tabs.List style={{ justifyContent: "space-evenly" }}>
                        <Tabs.Trigger value="account">今日</Tabs.Trigger>
                        <Tabs.Trigger value="documents">課題あり</Tabs.Trigger>
                        <Tabs.Trigger value="settings">すべて</Tabs.Trigger>
                    </Tabs.List>

                    <Box pt="3">
                        <Tabs.Content value="account">
                            <ClassCard
                                dayOfWeek="mon"
                                period={1}
                                teacher="林　淑蕙"
                                title="インターミディエイト英語コミュニケーションＡ"
                                top
                            />
                            <ClassCard dayOfWeek="mon" period={2} teacher="村田" title="C言語" />
                            <ClassCard dayOfWeek="mon" period={3} teacher="目加田" title="代数学" />
                        </Tabs.Content>

                        <Tabs.Content value="documents">
                            <ClassCard dayOfWeek="wed" period={1} teacher="村田" title="キャリアデザイン" top />
                        </Tabs.Content>

                        <Tabs.Content value="settings">
                            <ClassCard
                                dayOfWeek="mon"
                                period={1}
                                teacher="林　淑蕙"
                                title="インターミディエイト英語コミュニケーションＡ"
                                top
                            />
                            <ClassCard dayOfWeek="mon" period={2} teacher="村田" title="C言語" />
                            <ClassCard dayOfWeek="mon" period={3} teacher="目加田" title="代数学" />
                            <ClassCard dayOfWeek="wed" period={1} teacher="村田" title="キャリアデザイン" />
                        </Tabs.Content>
                    </Box>
                </Tabs.Root>
            </Box>
        </div>
    );
}

function NowOpenClass({ openClassName }: { openClassName: string }): JSX.Element {
    return (
        <Box>
            <Text size="4" weight="bold">
                受けている授業
            </Text>
            <ClassCard dayOfWeek="mon" period={1} teacher="林　淑蕙" title={openClassName} top />
        </Box>
    );
}
