import {Text, View} from 'react-native';
import {globalStyles} from "@/styles/global-styles";

const CalculatorApp = () => {
    return (
        <View style={globalStyles.calculatorContainer}>
            <Text style={globalStyles.mainResult}>50 x 50</Text>
            <Text style={globalStyles.subResult}>250</Text>
        </View>
    )
}

export default CalculatorApp