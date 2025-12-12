import {View} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {Link, router} from "expo-router";
import CustomButton from "@/components/CustomButton";

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View className="px-10">
                <Link href={"/products"} asChild>
                    <CustomButton color='primary'>
                        Products
                    </CustomButton>
                </Link>
                <CustomButton color='primary' onPress={() => {router.push('/products')}}>
                    Products
                </CustomButton>

                {/*<Link className='mb-5' href={"/products"}>Products</Link>*/}
                {/*<Link className='mb-5' href={"/profile"}>Profile</Link>*/}
                {/*<Link className='mb-5' href={"/settings"}>Settings</Link>*/}
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen