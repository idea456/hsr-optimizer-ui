import "@mantine/core/styles.css";

import {
    createTheme,
    MantineColorsTuple,
    MantineProvider,
} from "@mantine/core";
import { Upload } from "./Upload";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Optimizer } from "./Optimizer";

const myColor: MantineColorsTuple = [
    "#f7ecff",
    "#e7d6fb",
    "#caaaf1",
    "#ac7ce8",
    "#9354e0",
    "#833bdb",
    "#7b2eda",
    "#6921c2",
    "#5d1cae",
    "#501599",
];

const theme = createTheme({
    colors: {
        myColor,
    },
});

export default function App() {
    const [scannedData] = useLocalStorage("scanned_data", null);

    return (
        <MantineProvider theme={theme} forceColorScheme='dark'>
            {!scannedData && <Upload />}
            {scannedData && <Optimizer />}
        </MantineProvider>
    );
}
