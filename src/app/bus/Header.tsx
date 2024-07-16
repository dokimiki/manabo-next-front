import { Box, Flex, Separator, Text } from "@radix-ui/themes";

import "./header.scss";

export default function Header(): JSX.Element {
    return (
        <header>
            <Box className="w-full">
                <Flex align="start" justify="between" m="2">
                    <Box>
                        <Text weight="bold">BusTime</Text>
                    </Box>
                </Flex>
                <Separator size="4" />
            </Box>
        </header>
    );
}
