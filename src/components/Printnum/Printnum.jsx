import React from 'react'

export const Printnum = React.memo(({ Numero }) => {
  {
    console.log('iam the printing numbers')
  }
  return (
    <div>
      <h1>{Numero}</h1>
    </div>
  )
})
