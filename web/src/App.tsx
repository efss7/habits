import Habit from './components/Habit'

function App() {
  return (
    <div>
      <Habit completed={2}/>
      <Habit completed={1} />
      <Habit completed={8} />
      <Habit completed={6} />
    </div>
  )
}

export default App