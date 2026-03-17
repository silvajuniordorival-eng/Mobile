import { useState } from 'react'
import './App.css'
import Exemplos from './components/Exemplos'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <h1>SegundaApp</h1>
        <Exemplos/>

      </section>

    </>
  )
}

export default App
