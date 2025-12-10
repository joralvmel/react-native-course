import {Text, View} from 'react-native';

import {SafeAreaView} from "react-native-safe-area-context";

const App = () => {
    return (
        <SafeAreaView>
            <View className="mt-6 mx-2.5">
                <Text className="text-5xl" style={{fontFamily:'WorkSans-Black'}}>App</Text>
                <Text className="text-4xl font-work-black">App</Text>
                <Text className="text-3xl font-work-medium">App</Text>
                <Text className="text-2xl font-work-light">App</Text>
                <Text className="text-xl">App</Text>
            </View>
        </SafeAreaView>
    )
}

export default App