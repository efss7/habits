import { View } from 'react-native';

interface ProgressBarProps {
    progress?: number;
}

export default function ProgressBar({ progress = 0 }: ProgressBarProps) {
    return (
        <View className='w-full h-3 rounded-xl bg-zinc-400 '>
            <View 
            className='h-3 rounded-xl bg-violet-500'
            style={{width:`${progress}%`}}
            />
        </View>
    )
}
