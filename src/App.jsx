import { Outlet } from "react-router-dom"
import { Menu } from "./components/Gerais/Menu"
import { Rodape } from "./components/Gerais/Rodape"

// import { useState } from 'react'


function App() {

  return (

    //Rotas

    <>
      <Menu />
      <Outlet />
      <Rodape />
    </>
  )
}

export default App