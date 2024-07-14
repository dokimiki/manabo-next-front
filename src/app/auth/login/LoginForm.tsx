"use client";

import { AlertDialog, Box, Button, Flex, Heading, Link, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";

export default function LoginForm({
    isSending,
    loginError,
    handleAction,
}: {
    isSending: boolean;
    loginError: string;
    handleAction: (formData: FormData) => void;
}): JSX.Element {
    const [usernameInputError, setUsernameInputError] = useState<string>("");
    const [passwordInputError, setPasswordInputError] = useState<string>("");

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const checkErrorUsername = (s: string): boolean => {
        if (s.length <= 0) {
            setUsernameInputError("学籍番号を入れてほしいな！");
            return false;
        }

        setUsernameInputError("");
        return true;
    };

    const checkErrorPassword = (s: string): boolean => {
        if (s.length <= 0) {
            setPasswordInputError("パスワードを入れてほしいな！");
            return false;
        }

        setPasswordInputError("");
        return true;
    };

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        checkErrorUsername(e.currentTarget.value);
        setUsername(e.currentTarget.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        checkErrorPassword(e.currentTarget.value);
        setPassword(e.currentTarget.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        let isInputError = false;
        isInputError = !checkErrorUsername(username) || isInputError;
        isInputError = !checkErrorPassword(password) || isInputError;
        if (isInputError) {
            return;
        }

        const formData = new FormData(e.currentTarget);
        handleAction(formData);
    };

    return (
        <AlertDialog.Root>
            {/* ログインフォーム */}
            <Box width={{ xs: "370px", initial: "320px" }}>
                <form action={handleAction} onSubmit={handleSubmit}>
                    <Flex justify="center">
                        <Heading as="h3" mb="5" size="6" trim="start">
                            こんにちは！
                        </Heading>
                    </Flex>

                    <Box mb="5">
                        <Flex justify="center">
                            <Text size="2" weight="regular">
                                manaboのログイン情報を入力してね
                            </Text>
                        </Flex>
                    </Box>

                    <Text color="crimson">
                        {/* eslint-disable-next-line react/no-danger */}
                        <div dangerouslySetInnerHTML={{ __html: loginError }} />
                    </Text>

                    <Box mb="5">
                        <Text as="label" htmlFor="username" size="3" weight="bold">
                            学籍番号
                        </Text>
                        <TextField.Root
                            id="username"
                            name="username"
                            onChange={handleUsernameChange}
                            placeholder="X000000"
                            value={username}
                        />
                        <Text color="crimson">{usernameInputError}</Text>
                    </Box>

                    <Box mb="5" position="relative">
                        <Flex align="baseline" justify="between" mb="1">
                            <Text as="label" htmlFor="password" size="3" weight="bold">
                                パスワード
                            </Text>
                            <AlertDialog.Trigger>
                                <Button size={{ xs: "2", initial: "1" }} variant="ghost">
                                    パスワード忘れちゃった
                                </Button>
                            </AlertDialog.Trigger>
                        </Flex>
                        <TextField.Root
                            id="password"
                            name="password"
                            onChange={handlePasswordChange}
                            placeholder="password"
                            type="password"
                            value={password}
                        />
                        <Text color="crimson">{passwordInputError}</Text>
                    </Box>

                    <Box mt="6">
                        <Button className="w-full" loading={isSending} size="3">
                            ログイン
                        </Button>
                    </Box>
                </form>
            </Box>

            {/* パスワードリセットのダイアログ */}
            <AlertDialog.Content maxWidth="450px">
                <AlertDialog.Title>パスワードのリセット</AlertDialog.Title>
                <AlertDialog.Description size="2">
                    manaboのパスワード(CU_ID)は、ぼくたちじゃ変えられないんだ...ごめんね！困っているなら、中京大学の情報センターっていうところに聞きに行くといいみたい！
                    <br />
                    詳しくは、<Link href="https://www.chukyo-u.ac.jp/student-staff/it/cu_id.html">このページ</Link>を見てほしいな！
                </AlertDialog.Description>

                <Flex gap="3" justify="end" mt="4">
                    <AlertDialog.Action>
                        <Button variant="solid">わかった！</Button>
                    </AlertDialog.Action>
                </Flex>
            </AlertDialog.Content>
        </AlertDialog.Root>
    );
}
