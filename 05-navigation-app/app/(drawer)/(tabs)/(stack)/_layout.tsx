import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { Stack, useNavigation, router } from 'expo-router';
const StackLayout = () => {
    const navigation = useNavigation();

    const onHeaderLeftClick = (canGoBack: boolean) => {
        if (canGoBack) {
            if (router.canGoBack()) {
                router.back();
            }
            return;
        }

        navigation.dispatch(DrawerActions.toggleDrawer);
    };

    return (
        <Stack
            screenOptions={{
                // headerShown: false,
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: 'white',
                },
                headerLeft: ({ canGoBack }) => (
                    <Ionicons
                        name={canGoBack ? 'arrow-back-outline' : 'grid-outline'}
                        className="mr-5"
                        size={20}
                        onPress={() => onHeaderLeftClick(canGoBack ?? false)}
                    />
                ),
            }}
        >
            <Stack.Screen
                name="home/index"
                options={{
                    title: 'Inicio',
                }}
            />
            <Stack.Screen
                name="products/index"
                options={{
                    title: 'Productos',
                }}
            />

            <Stack.Screen
                name="products/[id]"
                options={{
                    title: '',
                }}
            />

            <Stack.Screen
                name="profile/index"
                options={{
                    title: 'Profile Screen',
                }}
            />
            <Stack.Screen
                name="settings/index"
                options={{
                    title: 'Settings Screen',
                }}
            />
        </Stack>
    );
};
export default StackLayout;
