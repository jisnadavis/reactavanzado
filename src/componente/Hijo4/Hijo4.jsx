import React, { useContext } from 'react'
import { Appcontext } from '../../Appprovider/Appcontext'
export const Hijo4 = () => {
  const { hijo4, mode } = useContext(Appcontext)
  return (
    <div>
      <p
        className={mode}
        style={{ color: mode === 'light' ? 'black' : 'white' }}
      >
        {hijo4}
      </p>
    </div>
  )
}
