import React from 'react'
import { Header } from '../../Header/Header'
import { Navbar } from '../../Navbar/Navbar'
import { Main } from '../../Main/Main'
import  image  from '../../images/up4.jpg'


export const Home = ({characters,change}) => {
  return (
    <>
      <Header image={image} />
      <Navbar change={change}/>
      <Main characters={characters} />
    </>

  )
}
