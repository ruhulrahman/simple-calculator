import { useState } from 'react'
import './App.css'
import Calculator from './components/Calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gray-200 flex items-center justify-center">
        <Calculator />
      </div>
    </>
  )
}

export default App
