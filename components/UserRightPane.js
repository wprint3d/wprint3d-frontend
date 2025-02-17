import { TabScreen, Tabs, TabsProvider } from "react-native-paper-tabs";
import UserPane                 from "./UserPane";
import UserPaneLoadingIndicator from "./UserPaneLoadingIndicator";

import { useTheme } from "react-native-paper";

import UserPrinterTerminal from "./UserPrinterTerminal";
import UserPrinterPreview from "./UserPrinterPreview";
import UserPrinterControl from "./UserPrinterControl";
import UserPrinterRecordings from "./UserPrinterRecordings";
import { useConnectionStatus } from "../hooks/useConnectionStatus";

export default function UserRightPane({ isLoadingPrinter = true, printerId = null, isSmallLaptop, isSmallTablet }) {
    const { colors } = useTheme();

    const { connectionStatus } = useConnectionStatus({ printerId });

    return (
        <UserPane style={{
            display:    'flex',
            flexShrink: 1,
            flexGrow:   1,
            width:      '1%' // NOTE: I have no idea why this works but I'm not willing to ask any further questions.
        }}>
            {
                isLoadingPrinter
                    ? <UserPaneLoadingIndicator message={"Preparing actions menu"} />
                    : <TabsProvider defaultIndex={0}>
                        <Tabs
                            style={{ backgroundColor: colors.background }}
                            mode="scrollable"
                            showLeadingSpace={false}
                        // uppercase={false} // true/false | default=true (on material v2) | labels are uppercase
                        // showTextLabel={false} // true/false | default=false (KEEP PROVIDING LABEL WE USE IT AS KEY INTERNALLY + SCREEN READERS)
                        // iconPosition // leading, top | default=leading
                        // style={{ backgroundColor:'#fff' }} // works the same as AppBar in react-native-paper
                        // dark={false} // works the same as AppBar in react-native-paper
                        // theme={} // works the same as AppBar in react-native-paper
                        //  (default=true) show leading space in scrollable tabs inside the header
                        // disableSwipe={false} // (default=false) disable swipe to left/right gestures
                        >
                            <TabScreen label="Terminal" icon="console">
                                <UserPrinterTerminal isLoadingPrinter={isLoadingPrinter} printerId={printerId} isSmallTablet={isSmallTablet} />
                            </TabScreen>
                            <TabScreen label="Preview" icon="eye">
                                <UserPrinterPreview printerId={printerId} isSmallTablet={isSmallTablet} />
                            </TabScreen>
                            <TabScreen label="Control" icon="camera-control">
                                <UserPrinterControl  isSmallLaptop={isSmallLaptop} isSmallTablet={isSmallTablet} connectionStatus={connectionStatus} />
                            </TabScreen>
                            <TabScreen label="Recordings" icon="record-circle-outline">
                                <UserPrinterRecordings
                                    isLoadingPrinter={isLoadingPrinter}
                                    printerId={printerId}
                                    isSmallLaptop={isSmallLaptop}
                                    isSmallTablet={isSmallTablet}
                                />
                            </TabScreen>
                        </Tabs>
                      </TabsProvider>
            }
        </UserPane>
    )
}