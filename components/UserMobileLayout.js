import { useEffect, useState } from "react";
import { View } from "react-native"
import { BottomNavigation, Text, useTheme } from "react-native-paper";
import UserLeftPane from "./UserLeftPane";
import { useQuery } from "@tanstack/react-query";
import API from "../includes/API";
import UserPrinterTerminal from "./UserPrinterTerminal";
import UserPrinterPreview from "./UserPrinterPreview";
import UserPrinterControl from "./UserPrinterControl";
import UserPrinterRecordings from "./UserPrinterRecordings";

const UserMobileLayout = ({
    isLoadingPrinter = true, printerId,
    maxHeight, printStatus,
    isSmallLaptop, isSmallTablet,
}) => {
    const { colors } = useTheme();

    const [ index, setIndex ] = useState(0);

    const [routes]  = useState([
        { key: 'home',       title: 'Home',       focusedIcon: 'home',           unfocusedIcon: 'home-outline'           },
        { key: 'terminal',   title: 'Terminal',   focusedIcon: 'console',        unfocusedIcon: 'console'                },
        { key: 'preview',    title: 'Preview',    focusedIcon: 'eye',            unfocusedIcon: 'eye-outline'            },
        { key: 'control',    title: 'Control',    focusedIcon: 'camera-control', unfocusedIcon: 'camera-control'         },
        { key: 'recordings', title: 'Recordings', focusedIcon: 'record-circle',  unfocusedIcon: 'record-circle-outline'  }
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home:       () => <UserLeftPane          isLoadingPrinter={isLoadingPrinter} printerId={printerId} maxHeight={maxHeight} printStatus={printStatus} />,
        terminal:   () => <UserPrinterTerminal   isLoadingPrinter={isLoadingPrinter} printerId={printerId} isSmallLaptop={isSmallLaptop} isSmallTablet={isSmallTablet} />,
        control:    () => <UserPrinterControl    isSmallLaptop={isSmallLaptop} isSmallTablet={isSmallTablet} />,
        preview:    () => <UserPrinterPreview    isSmallTablet={isSmallTablet} printerId={printerId} />,
        recordings: () => <UserPrinterRecordings isLoadingPrinter={isLoadingPrinter} printerId={printerId} isSmallLaptop={isSmallLaptop} isSmallTablet={isSmallTablet} />
    });

    return (
        <BottomNavigation
            barStyle={{ backgroundColor: colors.surface }}
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            shifting={true}
            compact={true}
        />
    );
}

export default UserMobileLayout;