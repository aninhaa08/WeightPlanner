import { Outlet } from "react-router-dom"
import { Menu } from "./components/Gerais/Menu"
import { Rodape } from "./components/Gerais/Rodape"
import { Home } from "./components/Pages/HomePage"

import './components/Pages/HomePage/style.scss'

// import { useState } from 'react'


function App() {
  return (
    <body>
      <Home />
    </body>
  )
}

export default App