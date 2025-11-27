import {StyleSheet} from "react-native";
import {Colors} from "@/constants/theme";


export const globalStyles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Colors.background,
    },

    calculatorContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 40,
    },

    mainResult: {
        color: Colors.textPrimary,
        fontSize: 70,
        textAlign: 'right',
        fontWeight: '400',
    },

    subResult: {
        color: Colors.textSecondary,
        fontSize: 40,
        textAlign: 'right',
        fontWeight: '300',
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },

    button: {
        height: 80,
        width: 80,
        backgroundColor: Colors.darkGrey,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },

    buttonText: {
        color: Colors.textPrimary,
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: '300',
        fontFamily: 'SpaceMono',

    }
});