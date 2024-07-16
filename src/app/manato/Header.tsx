import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import { Box, Flex, IconButton, Separator, Text } from "@radix-ui/themes";

import "./header.scss";

export default function Header({ hasNewMail }: { hasNewMail: boolean }): JSX.Element {
    return (
        <header>
            <Box className="w-full">
                <Flex align="center" justify="between" m="2">
                    <Box>
                        <Text weight="bold">MANATO</Text>
                    </Box>
                    <Box>
                        <MailButton hasNewMail={hasNewMail} />
                    </Box>
                </Flex>
                <Separator size="4" />
            </Box>
        </header>
    );
}

function MailButton({ hasNewMail }: { hasNewMail: boolean }): JSX.Element {
    return (
        <IconButton className="relative" variant="surface">
            <div className={["mail-button-icon", hasNewMail && "has-new-mail"].join(" ")}>
                <EnvelopeOpenIcon height="16" width="16" />
            </div>
        </IconButton>
    );
}
