"use client";

import { Badge, Box, Button, Card, Flex, Grid, Heading, Skeleton, Tabs, Text, TextArea, Theme } from "@radix-ui/themes";

export default function Login() {
    return (
        <div>
            <Card size="2">
                <Flex gap="6">



                    <Card size="2">
                        <Flex gap="6">
                            <Flex direction="column" gap="3">
                                <Grid gap="1">
                                    <Text as="div" weight="bold" size="2" mb="1">
                                        Feedback
                                    </Text>
                                    <TextArea placeholder="Write your feedback…" />
                                </Grid>
                                <Button>Send</Button>
                            </Flex>
                        </Flex>
                    </Card>



                    <Card size="2">
                        <Flex direction="column" gap="3">
                            <Grid gap="1">
                                <Text as="div" weight="bold" size="2" mb="1">
                                    Feedback
                                </Text>
                                <TextArea placeholder="Write your feedback…" />
                            </Grid>
                            <Button>Send</Button>
                        </Flex>
                    </Card>

                </Flex>
            </Card>


        </div>
    );
}
