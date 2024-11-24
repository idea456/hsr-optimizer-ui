import { Avatar, Card, Center, Select, Slider } from "@mantine/core";
import { Stats } from "./Stats";
import { useStore } from "../stores";

export function Optimizer() {
    const optimizationTarget = useStore((state) => state.optimizationTarget);
    const setOptimizationTarget = useStore(
        (state) => state.setOptimizationTarget,
    );

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "30% 70%",
            }}
            className='p-5 w-full'
        >
            <Card className='mr-5' withBorder>
                <div className='flex gap-5'>
                    <Select
                        defaultValue='E0'
                        data={["E0", "E1", "E2", "E3", "E4", "E5", "E6"]}
                        className='absolute right-4 top-4'
                        w={70}
                        withCheckIcon={false}
                    />
                    <Avatar
                        src='https://static.wikia.nocookie.net/houkai-star-rail/images/2/24/Character_Acheron_Icon.png'
                        radius='sm'
                        size='xl'
                    />
                    <div className='flex flex-col w-full gap-2 justify-between'>
                        <h1 className='font-bold text-3xl'>Acheron</h1>
                        <Slider
                            defaultValue={1}
                            label={(value) => `Level ${value}`}
                            styles={{ markLabel: { display: "none" } }}
                        />
                    </div>
                </div>

                <div className='mt-6'>
                    <Stats />
                </div>
            </Card>
            <>
                {!optimizationTarget && (
                    <Center className='h-full w-full flex flex-col gap-4'>
                        <h1 className='font-bold text-2xl text-neutral-600'>
                            First, select an optimization target
                        </h1>
                        <Select
                            data={["ULTIMATE_ALL_3_TARGETS"]}
                            placeholder='Select an optimization target'
                            withCheckIcon={false}
                            w={290}
                            onChange={(_value, option) =>
                                setOptimizationTarget(option)
                            }
                        />
                    </Center>
                )}
                {optimizationTarget && (
                    <div className='flex gap-5'>
                        <Card withBorder className='h-fit'>
                            <h1 className='font-bold text-xl mb-2'>Skills</h1>
                            <div className='flex flex-col gap-7'>
                                <div className='flex flex-col gap-2 w-full'>
                                    <h1>
                                        Crimson Knot(s) removed in the first hit
                                    </h1>
                                    <div>
                                        <Slider
                                            defaultValue={1}
                                            label={(value) => `Level ${value}`}
                                            min={0}
                                            max={3}
                                            color='violet'
                                            marks={[
                                                { value: 0, label: "0" },
                                                { value: 1, label: "1" },
                                                { value: 2, label: "2" },
                                                { value: 3, label: "3" },
                                            ]}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2 w-full'>
                                    <h1>
                                        Crimson Knot(s) removed in the second
                                        hit
                                    </h1>
                                    <div>
                                        <Slider
                                            defaultValue={1}
                                            label={(value) => `Level ${value}`}
                                            min={0}
                                            max={3}
                                            color='violet'
                                            marks={[
                                                { value: 0, label: "0" },
                                                { value: 1, label: "1" },
                                                { value: 2, label: "2" },
                                                { value: 3, label: "3" },
                                            ]}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2 w-full'>
                                    <h1>
                                        Crimson Knot(s) removed in the third hit
                                    </h1>
                                    <div>
                                        <Slider
                                            defaultValue={1}
                                            label={(value) => `Level ${value}`}
                                            min={0}
                                            max={3}
                                            color='violet'
                                            marks={[
                                                { value: 0, label: "0" },
                                                { value: 1, label: "1" },
                                                { value: 2, label: "2" },
                                                { value: 3, label: "3" },
                                            ]}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                )}
            </>
        </div>
    );
}
