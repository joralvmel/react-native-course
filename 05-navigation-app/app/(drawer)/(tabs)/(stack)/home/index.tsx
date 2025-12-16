import {View} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {Link, router, useNavigation} from "expo-router";
import CustomButton from "@/components/CustomButton";
import {DrawerActions} from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();

    const onToggleDrawer = () => {
        navigation.dispatch(DrawerActions.toggleDrawer());
    }

    return (
        <SafeAreaView>
            <View className="px-10">
                <CustomButton
                    color='primary'
                    className='mb-2'
                    onPress={() => {router.push('/products')}}
                >
                    Products
                </CustomButton>

                <CustomButton
                    color='secondary'
                    className='mb-2'
                    onPress={() => {router.push('/profile')}}
                >
                    Profile
                </CustomButton>

                <CustomButton
                    color='tertiary'
                    className='mb-2'
                    onPress={() => {router.push('/settings')}}
                >
                    Settings
                </CustomButton>

                <CustomButton
                    variant='text-only'
                    className='mb-2'
                    onPress={() => {router.push('/products')}}
                >
                    Products
                </CustomButton>

                <CustomButton onPress={onToggleDrawer}>Open Menu</CustomButton>

                {/*<Link href={"/products"} asChild>*/}
                {/*    <CustomButton className='mb-10' color='primary'>*/}
                {/*        Products*/}
                {/*    </CustomButton>*/}
                {/*</Link>*/}
                {/*<Link className='mb-5' href={"/products"}>Products</Link>*/}
                {/*<Link className='mb-5' href={"/profile"}>Profile</Link>*/}
                {/*<Link className='mb-5' href={"/settings"}>Settings</Link>*/}
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen