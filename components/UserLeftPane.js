import { useWindowDimensions } from "react-native";

import UserPane                      from "./UserPane";
import UserPaneLoadingIndicator      from "./UserPaneLoadingIndicator";
import UserPrinterPicker             from "./UserPrinterPicker";
import UserPrinterCameras            from "./UserPrinterCameras";
import UserPrinterTemperaturePresets from "./UserPrinterTemperaturePresets";
import UserPrinterFileControls       from "./UserPrinterFileControls";
import UserPrinterFileProgress       from "./UserPrinterFileProgress";
import UserPrinterStatus             from "./UserPrinterStatus";

import { useEffect } from "react";

export default function UserLeftPane({ isLoadingPrinter = true, printerId = null, maxHeight, connectionStatus, lastTerminalMessage, isRunningMapper, printStatus }) {
    const windowWidth = useWindowDimensions().width;

    let width = '30%';

    if (windowWidth <= 768)  {          // small tablet
        width = '100%';
    } else if (windowWidth <= 1024) {   // small laptop
        width = '45%';
    } else if (windowWidth <= 1440) {   // medium laptop
        width = '40%';
    } else if (windowWidth <= 1600) {   // small desktop
        width = '35%';
    }

    let paneComponents = [];

    if (printerId) {
        paneComponents.push(<UserPrinterStatus              key={paneComponents.length} connectionStatus={connectionStatus} isRunningMapper={isRunningMapper} />);
        paneComponents.push(<UserPrinterTemperaturePresets  key={paneComponents.length} />);
        paneComponents.push(<UserPrinterCameras             key={paneComponents.length} />);
        paneComponents.push(<UserPrinterFileProgress        key={paneComponents.length} lastTerminalMessage={lastTerminalMessage} />);
        paneComponents.push(<UserPrinterFileControls        key={paneComponents.length} printerId={printerId} connectionStatus={connectionStatus} printStatus={printStatus} />);
    }

    useEffect(() => {
        console.debug('windowWidth:', windowWidth);
    }, [ windowWidth ]);

    return (
        <UserPane style={{
            width:      width,
            maxHeight:  maxHeight,
            height:     maxHeight,
            overflow:   'auto'
        }}>
            {
                isLoadingPrinter
                    ? <UserPaneLoadingIndicator message={"Getting printer information"} />
                    : [
                        <UserPrinterPicker key="-1" printerId={printerId} />,
                        ...paneComponents
                    ]
            }
        </UserPane>
    );
}