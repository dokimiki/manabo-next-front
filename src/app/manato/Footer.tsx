import { HeartFilledIcon } from "@radix-ui/react-icons";
import { Box, Flex, Text } from "@radix-ui/themes";

export default function Footer(): JSX.Element {
    return (
        <footer>
            <Box className="w-screen">
                <Flex align="center" gap="1" justify="center" mb="1" mt="2">
                    <Text color="gray" size="1">
                        Made with
                    </Text>
                    <HeartFilledIcon color="tomato" scale="0.5" />
                    <Text color="gray" size="1">
                        in Chukyo-u Student Volunteers
                    </Text>
                </Flex>
            </Box>
        </footer>
    );
}
