interface HabitProps {
    completed: number
}

export default function Habit(props: HabitProps) {
    return (
        <div className="bg-red-700 w-10 h-10 text-white rounded m-2 text-center flex items-center justify-center">
            {props.completed}
        </div>
    )
}
