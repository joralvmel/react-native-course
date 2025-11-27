import {Pressable, Text} from 'react-native';

import * as Haptics from 'expo-haptics';

import {Colors} from "@/constants/theme";
import {globalStyles} from "@/styles/global-styles";

interface CalculatorButtonProps {
    label: string;
    color?: string;
    blackText?: boolean;
    doubleSize?: boolean;
    onPress: () => void;
}

const CalculatorButton = ({
                              label,
                              color = Colors.darkGrey,
                              blackText = false,
                              doubleSize = false,
                              onPress
}:CalculatorButtonProps) => {
    return (
        <Pressable
            style={({pressed})=>({
                ...globalStyles.button,
                backgroundColor: color,
                opacity: pressed ? 0.8 : 1,
                width: doubleSize ? 180 : 80,
            })}
            onPress={() => {
                Haptics.selectionAsync();
                onPress();
            }}
        >
            <Text
                style={{
                    ...globalStyles.buttonText,
                    color: blackText ? "black" : "white",
            }}
            >{label}</Text>
        </Pressable>
    )
}

export default CalculatorButton 