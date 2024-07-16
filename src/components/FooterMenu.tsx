"use client";

import { Icon } from "@iconify/react";
import { Box, Flex, IconButton, Separator } from "@radix-ui/themes";
import { type AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export default function FooterMenu({
    selectedIcon,
    router,
}: {
    selectedIcon: "bus" | "home" | "setting";
    router: AppRouterInstance;
}): JSX.Element {
    const busIcon =
        selectedIcon === "bus" ? (
            <Icon fontSize="35px" icon="solar:bus-bold" />
        ) : (
            <Icon color="gray" fontSize="35px" icon="solar:bus-broken" />
        );

    const homeIcon =
        selectedIcon === "home" ? (
            <Icon fontSize="35px" icon="solar:home-2-bold" />
        ) : (
            <Icon color="gray" fontSize="35px" icon="solar:home-2-broken" />
        );

    const settingIcon =
        selectedIcon === "setting" ? (
            <Icon fontSize="35px" icon="solar:settings-bold" />
        ) : (
            <Icon color="gray" fontSize="35px" icon="solar:settings-broken" />
        );

    function handleButtonClick(type: "bus" | "home" | "setting"): void {
        switch (type) {
            case "bus":
                router.push("/bus");
                break;
            case "home":
                router.push("/manato");
                break;
            case "setting":
                router.push("/setting");
                break;
            default:
                break;
        }
    }

    return (
        <Box bottom="0" position="fixed" width="100%">
            <Separator size="4" />
            <Flex m="2" style={{ justifyContent: "space-around" }}>
                <IconButton
                    onClick={() => {
                        handleButtonClick("bus");
                    }}
                    variant="ghost"
                >
                    {busIcon}
                </IconButton>
                <IconButton
                    onClick={() => {
                        handleButtonClick("home");
                    }}
                    variant="ghost"
                >
                    {homeIcon}
                </IconButton>
                <IconButton
                    onClick={() => {
                        handleButtonClick("setting");
                    }}
                    variant="ghost"
                >
                    {settingIcon}
                </IconButton>
            </Flex>
        </Box>
    );
}
