import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';

const DrawerLayout = () => {
    return (
        <Drawer
            screenOptions={{
                // headerShown: false,
                overlayColor: 'rgba(0,0,0,0.4)',
                drawerActiveTintColor: 'indigo',
                headerShadowVisible: false,
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