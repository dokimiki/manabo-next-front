import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Box, Separator, Flex, Button, Text } from "@radix-ui/themes";
import { DOWtoStr } from "@/src/libs/common";

export function ClassCard({
    title,
    teacher,
    dayOfWeek,
    period,
    top,
}: {
    title: string;
    teacher: string;
    dayOfWeek: number;
    period: number;
    top?: boolean;
}): JSX.Element {
    const needHeadSeparator = top ?? false;

    return (
        <Box>
            {needHeadSeparator && <Separator size="4" />}

            <Box p="4">
                <Box mb="2">
                    <Text size="4" weight="bold">
                        {title}
                    </Text>
                </Box>

                <Flex align="center" justify="between">
                    <Box>
                        <Text size="3" weight="medium">
                            {teacher}
                        </Text>
                        <br />
                        <Text size="2" weight="regular">
                            {DOWtoStr(dayOfWeek)}曜日 {period}限目
                        </Text>
                    </Box>
                    <Button size="3">
                        授業ページ
                        <ArrowRightIcon />
                    </Button>
                </Flex>
            </Box>

            <Separator size="4" />
        </Box>
    );
}
