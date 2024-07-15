import { Box, Flex, Text } from "@radix-ui/themes";

export default function Header(): JSX.Element {
    return (
        <header>
            <Box className="w-screen">
                <Flex align="center" justify="between" m="2">
                    <Text weight="bold">MANATO</Text>
                </Flex>
                <hr />
            </Box>
        </header>
    );
}
