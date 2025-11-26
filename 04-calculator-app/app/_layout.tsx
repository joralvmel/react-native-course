import {View} from 'react-native';
import {Slot} from "expo-router";
import {useFonts} from "expo-font";
import {Colors} from "@/constants/theme";
import {StatusBar} from "expo-status-bar";


const RootLayout = () => {
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    })

    if (!loaded) {
        return null;
    }

    return (
        <View style={{backgroundColor: Colors.background, flex: 1, padding: 30}}>
            <Slot />
            <StatusBar style="light" />
        </View>
    )
}

export default RootLayout