import './style.scss'
import { Link } from 'react-router-dom'
import { 
  PiLightbulb, 
  PiChalkboardTeacher, 
  PiWrench, 
  PiFilmReel, 
  PiBookOpenText,
  PiList, 
  PiX
} from "react-icons/pi"
import { useState } from 'react'


function Menu() {
  const [controlar, setControlar] = useState(false)

  function handleMostrarMenu() {
    if(controlar) {
      setControlar(false)
      return
    }

    setControlar(true)
  }

  return (
    <header>
      <div id='menu-mobile'>
        
        <div className="menuFechado">
          <Link className='logo' to={"/"}>logo</Link>
          <button onClick={handleMostrarMenu}>{controlar == true ? <PiX size={21} /> : <PiList size={21} />}</button>
        </div>

        {/* <img src="" alt="" /> */} 
        <div className={`menu ${controlar == true ? "" : "close"}`}>
          <nav>
            <Link to={"/objetivo"}> Objetivo </Link>
            <div></div>
            <Link to={"/publico"}> Público Alvo </Link>
            <div></div>
            <Link to={"/componentes"}> Componentes </Link>
            <div></div>
            <Link to={"/bibliografia"}> Bibliografia </Link>
            <div></div>
          </nav>
        </div>
      </div>

      <div id="menu-desktop">
      <Link className='logo' to={"/"}>logo</Link>
        <nav>
            <Link to={"/objetivo"}> Objetivo </Link>
            <Link to={"/publico"}> Público Alvo </Link>
            <Link to={"/componentes"}> Componentes </Link>
            <Link to={"/bibliografia"}> Bibliografia </Link>
        </nav>
      </div>
    </header>
  )
}

export default Menu