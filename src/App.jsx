import { useContext } from 'react'
import './App.css'
import { Hijo1 } from './componente/Hijo1/Hijo1'
import { Appcontext } from './Appprovider/Appcontext'

function App() {
  const { mode } = useContext(Appcontext)
  return (
    <>
      <div className={`app ${mode}`}>
        <Hijo1></Hijo1>
      </div>
    </>
  )
}

export default App
