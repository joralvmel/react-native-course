import {Pressable, PressableProps, Text, View} from 'react-native';

interface CustomButtonProps extends PressableProps {
    children: string;
    color?: 'primary' | 'secondary' | 'tertiary';
}

const CustomButton = ({ children, color = 'primary', onPress, onLongPress  }:CustomButtonProps) => {
    const btnColor = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        tertiary: 'bg-tertiary',
    }[color];

    return (
        <Pressable
            className={`p-3 rounded-md ${btnColor} active:opacity-90`}
            onPress={onPress}
            onLongPress={onLongPress}
        >
            <Text className='text-white text-center'>{children}</Text>
        </Pressable>
    )
}

export default CustomButton 