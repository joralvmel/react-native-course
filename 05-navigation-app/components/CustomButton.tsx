import {Pressable, PressableProps, Text, View} from 'react-native';
import {forwardRef} from 'react';

interface CustomButtonProps extends PressableProps {
    children: string;
    color?: 'primary' | 'secondary' | 'tertiary';
    variant?: 'contained' | 'text-only';
    className?: string;
}

const CustomButton = forwardRef<View, CustomButtonProps>(
    ({ children, color = 'primary', onPress, onLongPress, variant = 'contained', className }, ref) => {
        const btnColor = {
            primary: 'bg-primary',
            secondary: 'bg-secondary',
            tertiary: 'bg-tertiary',
        }[color];

        const textColor = {
            primary: 'text-primary',
            secondary: 'text-secondary',
            tertiary: 'text-tertiary',
        }[color];

        if (variant === 'text-only') {
            return (
                <Pressable
                    ref={ref}
                    className={`p-3 ${className}`}
                    onPress={onPress}
                    onLongPress={onLongPress}
                >
                    <Text className={`text-center ${textColor} font-work-medium`}>{children}</Text>
                </Pressable>
            )
        }

        return (
            <Pressable
                ref={ref}
                className={`p-3 rounded-md ${btnColor} active:opacity-90 ${className}`}
                onPress={onPress}
                onLongPress={onLongPress}
            >
                <Text className={`text-white text-center font-work-medium`}>{children}</Text>
            </Pressable>
        )
    });

CustomButton.displayName = 'CustomButton';

export default CustomButton;
