import React from 'react'

export const Main = ({ characters }) => {

  return (
    <body className='down'>

      {characters.map((Element, indice) => (
        <div className='h'>
          <div key={indice} className="content" >
            <img src={Element.image} className='img2' />
            <div className="Lyrics">
              <h1>{Element.name} </h1>
              <p>Geder: {Element.gender}</p>
              <p>Status: {Element.status}</p>
            </div>
          </div>
        </div>
      ))}


    </body>
  )
}
