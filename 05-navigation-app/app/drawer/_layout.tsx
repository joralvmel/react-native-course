import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import CustomDrawer from "@/components/CustomDrawer";

const DrawerLayout = () => {
    return (
        <Drawer
            drawerContent={CustomDrawer}
            screenOptions={{
                // headerShown: false,
                overlayColor: 'rgba(0,0,0,0.4)',
                drawerActiveTintColor: 'indigo',
                headerShadowVisible: false,
                sceneStyle: {
                    backgroundColor: 'white',
                },
                drawerStyle: {
                    width: 250,
                    backgroundColor: 'white',
                },
            }}
        >
            <Drawer.Screen
                name="user/index"
                options={{
                    drawerLabel: 'User',
                    title: 'User',

                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="person-circle-outline" size={size} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="schedule/index"
                options={{
                    drawerLabel: 'Schedule',
                    title: 'Schedule',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="calendar-outline" size={size} color={color} />
                    ),
                }}
            />
        </Drawer>
    );
};
export default DrawerLayout;