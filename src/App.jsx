import { useState } from 'react'
import './App.css'
import Convite from './components/convite'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="tela">

        <Convite />
      </div>
    </>
  )
}

export default App
