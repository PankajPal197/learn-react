import './App.css'
import Card from './components/Card'

function App() {


  return (
    <>
      <h1 className="bg-green-400 text-block p-4 rounded-xl mb-4">Tailwind Test</h1>

      <Card username="Code with React" btnText="Click Me" />
      <Card username="React with Vite" btnText="Visit Me" />

    </>
  )
}

export default App
