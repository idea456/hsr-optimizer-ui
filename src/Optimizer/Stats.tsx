import { Table } from "@mantine/core";
import IconAttack from "../assets/IconAttack.png";
import IconDefense from "../assets/IconDefence.png";
import IconMaxHP from "../assets/IconMaxHP.png";
import IconSpeed from "../assets/IconSpeed.png";
import IconCritRate from "../assets/IconCritRate.png";
import IconCritDMG from "../assets/IconCritDMG.png";

const elements = [
    { icon: IconAttack, name: "ATK", value: 10 },
    { icon: IconDefense, name: "DEF", value: 12 },
    { icon: IconMaxHP, name: "HP", value: 32 },
    { icon: IconSpeed, name: "SPD", value: 22 },
    { icon: IconCritRate, name: "Crit Rate", value: 42 },
    { icon: IconCritDMG, name: "Crit DMG", value: 42 },
];

export function Stats() {
    const rows = elements.map((element, i) => (
        <Table.Tr key={element.name} bg={i % 2 === 0 ? "gray" : "none"}>
            <Table.Td className='flex items-center gap-3 font-bold'>
                <img src={element.icon} className='w-7 h-7' />
                <h1>{element.name}</h1>
            </Table.Td>
            <Table.Td align='right' className='font-bold'>
                {element.value}
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <div>
            <h1 className='font-bold my-3'>Base Stats</h1>
            <Table>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
            <h1 className='font-bold my-3'>More Stats</h1>
            <Table>
                <Table.Tbody>{rows.slice(0, 3)}</Table.Tbody>
            </Table>
        </div>
    );
}
