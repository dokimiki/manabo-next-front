import { HeartFilledIcon } from "@radix-ui/react-icons";
import { Box, Flex, Text } from "@radix-ui/themes";

import "./footer.module.scss";

export default function Footer(): JSX.Element {
    return (
        <footer>
            <Box className="w-full">
                <Flex align="center" gap="1" justify="center" mb="1" mt="2">
                    <Text className="footer-text" size="1">
                        Made with
                    </Text>
                    <HeartFilledIcon className="footer-love-icon" scale="0.5" />
                    <Text className="footer-text" size="1">
                        in Chukyo-u Student Volunteers
                    </Text>
                </Flex>
            </Box>
        </footer>
    );
}
