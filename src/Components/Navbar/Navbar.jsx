import React from 'react'

export const Navbar = ({change}) => {
  return (
    <body>
      <input onChange={change} type="text" placeholder="Buscar personaje..." />
    </body>
  )
}
