import React, { Children, useState } from 'react'
export const Appcontext = React.createContext()
export const Appprovider = ({ children }) => {
  const [mode, setmode] = useState('light')
  return (
    <Appcontext.Provider
      value={{ hijo4: 'hello i am hijo 4', mode: mode, setmode: setmode }}
    >
      {children}
    </Appcontext.Provider>
  )
}
