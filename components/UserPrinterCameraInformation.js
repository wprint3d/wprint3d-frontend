import { View } from "react-native";

import { useTheme } from "react-native-paper";

export default function UserPrinterCameraInformation({ children, onLayout, style, height }) {
    const { colors } = useTheme();

    console.debug('UserPrinterCameraInformation', { height });

    return (
        <View
            style={{
                display:     'flex',
                alignItems:  'center',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: colors.secondaryContainer,
                width:       '100%',
                minHeight:   '28vh',
                height:      height,
                ...style
            }}
            onLayout={onLayout}
        >{children}</View>
    );
}