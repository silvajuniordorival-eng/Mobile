import { useState } from 'react'
import './App.css'
import Convite from './Components/Convite'
import Contatos from './Components/Contatos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section id="tela">
      <Convite />
      <Contatos />


    </section>
    </>
  )
}

export default App
