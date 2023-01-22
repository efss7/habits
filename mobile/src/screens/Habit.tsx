import { useRoute } from "@react-navigation/native";
import dayjs from "dayjs";
import { ScrollView, Text, View } from "react-native";
import { BackButton } from "../components/BackButton";
import { CheckBox } from "../components/CheckBox";
import ProgressBar from "../components/ProgressBar";

interface HabitProps {
    date: string
}

export function Habit() {
    const route = useRoute()
    const { date } = route.params as HabitProps;

    const parsedDate = dayjs(date);
    const dayOfWeek = parsedDate.format('dddd')
    const dayAndMoth = parsedDate.format('DD/MM')

    console.log(date)
    return (
        <View className=" flex-1 bg-background px-8 pt-16">
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                <BackButton />

                <Text className="mt-6 text-zinc-400 font-semibold text-base lowercase" >
                    {dayOfWeek}
                </Text>
                <Text className="text-white font-extrabold text-3xl">
                    {dayAndMoth}
                </Text>
                <ProgressBar progress={80} />
                <View className="mt-6">
                    <CheckBox
                    title="Ser Lindo"
                    checked={true}
                    />
                </View>
            </ScrollView>

        </View>
    );
}