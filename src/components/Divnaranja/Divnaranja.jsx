import React from 'react'
import './Divnarnja.css'
// pongo react.memo para que no se renderice el componente por el cambio de estado del compoenente padre cuando a este componente no le están cambiando las props y por lo tanto no cambia nada dentro del mismo y por lo tanto no es necesario una re-renderización de este componente.
// este componente es muy pequeño y es un div sólo entonces lo normal sería no usar React.memo, sin embargo es un ejemplo por si nos encontrásemos con este caso en componentes más complejos
export const Divnaranja = React.memo(() => {
  return (
    <div className='orange'>
      {console.log('hi iam a componenet with background color orange')}
    </div>
  )
})
