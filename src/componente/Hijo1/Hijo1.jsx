import React, { useContext } from 'react'
import { Hijo2 } from '../Hijo2/Hijo2'
import { Appcontext } from '../../Appprovider/Appcontext'

export const Hijo1 = () => {
  const { mode, setmode } = useContext(Appcontext)
  return (
    <div>
      <button
        onClick={() => (mode === 'light' ? setmode('dark') : setmode('light'))}
      >
        {' '}
        {mode === 'light' ? 'off' : 'on'}
      </button>
      <Hijo2></Hijo2>
    </div>
  )
}
