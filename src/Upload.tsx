import { Group, rem, Text, Button, Center } from "@mantine/core";
import { FileJson, Upload as UploadIcon, X } from "lucide-react";
import { Dropzone } from "@mantine/dropzone";
import { useLocalStorage } from "@uidotdev/usehooks";

export function Upload() {
    const [, setScannedData] = useLocalStorage("scanned_data");

    return (
        <Center className='w-screen h-screen flex flex-col'>
            <Dropzone
                onDrop={(files) => setScannedData(files)}
                onReject={(files) => console.log("rejected files", files)}
                accept={["application/json"]}
            >
                <Group
                    justify='center'
                    gap='xl'
                    mih={220}
                    style={{ pointerEvents: "none" }}
                >
                    <Dropzone.Accept>
                        <UploadIcon
                            style={{
                                width: rem(52),
                                height: rem(52),
                            }}
                            stroke='1.5'
                        />
                    </Dropzone.Accept>
                    <Dropzone.Reject>
                        <X
                            style={{
                                width: rem(52),
                                height: rem(52),
                                color: "var(--mantine-color-red-6)",
                            }}
                        />
                    </Dropzone.Reject>
                    <Dropzone.Idle>
                        <FileJson
                            style={{
                                width: rem(52),
                                height: rem(52),
                                color: "var(--mantine-color-dimmed)",
                            }}
                        />
                    </Dropzone.Idle>

                    <div>
                        <Text size='xl' inline>
                            Drag the scanned data here
                        </Text>
                        <Text size='sm' c='dimmed' inline mt={7}>
                            You can obtain the scanned data using Honkai: Star
                            Rail - Data Scanner
                        </Text>
                    </div>
                </Group>
            </Dropzone>
            <Group justify='center' mt='md'>
                <Button>Paste data instead</Button>
            </Group>
        </Center>
    );
}
