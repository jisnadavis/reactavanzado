import React, { useState } from 'react'
import './cal.css'

export const Cal = ({ numero, setnumero }) => {
  {
    console.log(' iam in calc')
  }
  return (
    <div className='usestate'>
      <button
        onClick={() => {
          setnumero(numero + 1)
        }}
      >
        next
      </button>
      <h1>{numero}</h1>
      <button
        onClick={() => {
          setnumero(numero - 1)
        }}
      >
        {' '}
        previous
      </button>
      {console.log('hello i am button')}
    </div>
  )
}
