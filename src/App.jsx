import { useState } from 'react'

import './App.css'
import { Cal } from './components/Clculater/Cal'
import { Divnaranja } from './components/Divnaranja/Divnaranja'
import { Printnum } from './components/Printnum/Printnum'

function App() {
  const [numero, setnumero] = useState(0)
  return (
    <>
      <Cal numero={numero} setnumero={setnumero}></Cal>
      <Divnaranja></Divnaranja>
      <Printnum Numero={numero}></Printnum>
    </>
  )
}

export default App
