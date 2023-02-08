import { useEffect } from 'react';
import { View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
Animated

interface ProgressBarProps {
    progress?: number;
}

export default function ProgressBar({ progress = 0 }: ProgressBarProps) {
    const sharedProgress = useSharedValue(progress);

    const style = useAnimatedStyle(() => {
        return {
            width: `${sharedProgress.value}%`
        }
    })

    useEffect(() => {
        sharedProgress.value = withTiming(progress);
    }, [progress])

    return (
        <View className='w-full h-3 rounded-xl bg-zinc-400  '>
            <Animated.View
                className='h-3 rounded-xl bg-violet-500'
                style={style}
            />
        </View>
    )
}
