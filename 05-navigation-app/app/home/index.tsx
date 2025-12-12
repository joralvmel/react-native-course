import {Text, View} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {Link} from "expo-router";

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View className="px-10">
                <Link className='mb-5' href={"/products"}>Products</Link>
                <Link className='mb-5' href={"/profile"}>Profile</Link>
                <Link className='mb-5' href={"/settings"}>Settings</Link>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen