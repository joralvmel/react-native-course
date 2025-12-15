import { Redirect} from "expo-router";

const App = () => {

    return <Redirect href={"/(stack)/home"}/>
    // return (
    //     <SafeAreaView>
    //         <View className="mt-6 mx-2.5">
    //             <Text className="text-5xl" style={{fontFamily:'WorkSans-Black'}}>App</Text>
    //             <Text className="text-4xl text-primary font-work-black">App</Text>
    //             <Text className="text-3xl text-secondary font-work-medium">App</Text>
    //             <Text className="text-2xl text-secondary-100 font-work-light">App</Text>
    //             <Text className="text-xl text-tertiary">App</Text>
    //
    //             <Link href="/products">Products</Link>
    //         </View>
    //     </SafeAreaView>
    // )
}

export default App