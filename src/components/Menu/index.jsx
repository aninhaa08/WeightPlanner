import './style.scss'
import { Link } from 'react-router-dom'
import { 
  PiList, 
  PiX,
  PiUserCircle
} from "react-icons/pi"
import { useState } from 'react'
import Logo from '../../assets/logoMobile.png'
import LogoBranco from '../../assets/logoMobileBranco.png'
import LogoWeb from '../../assets/LogoWebBranco.png'


function Menu() {
  const [controlar, setControlar] = useState(false)

  function handleMostrarMenu() {
    if(controlar) {
      setControlar(false)
      document.documentElement.style.overflow = 'auto'
      return
    }

    setControlar(true)
    document.documentElement.style.overflow = 'hidden'
  }

  return (
    <header>
      <div id='menu-mobile'>
        
        <div className={`menuFechado ${controlar ? 'menuAberto' : ''}`}>
          <Link className='logo' onClick={`menu ${controlar == false}`} to={"/"}> <img src={controlar ? LogoBranco : Logo} alt="" /> </Link>
          <button onClick={handleMostrarMenu}>{controlar == true ? <PiX size={21} /> : <PiList size={21} />}</button>
        </div>

        {/* <img src="" alt="" /> */} 
        <div className={`menu ${controlar == true ? "" : "close"}`}>
          <nav>
            <Link onClick={`menu ${controlar == false}`} to={"/login"}> Login | Registrar </Link>
            <div></div>
            <Link onClick={`menu ${controlar == false}`} to={"/objetivo"}> Nosso objetivo </Link>
            <div></div>
            <Link onClick={`menu ${controlar == false}`} to={"/publico"}> Público Alvo </Link>
            <div></div>
            <Link onClick={`menu ${controlar == false}`} to={"/componentes"}> Componentes e valores </Link>
            <div></div>
            <Link onClick={`menu ${controlar == false}`} to={"/bibliografia"}> Bibliografia </Link>
            <div></div>
          </nav>
        </div>
      </div>

      <div id="menu-desktop">
        <Link className='logo' to={"/"}> <img src={LogoWeb} alt="" /> </Link>
          <nav>
              <Link className='linksHover' to={"/objetivo"}> Objetivo </Link>
              <Link className='linksHover' to={"/publico"}> Público Alvo </Link>
              <Link className='linksHover' to={"/componentes"}> Componentes </Link>
              <Link className='linksHover' to={"/bibliografia"}> Bibliografia </Link>
          </nav>
        <Link className='linkLogin' to={"/login"}> <PiUserCircle size={24} /> </Link>
      </div>
    </header>
  )
}

export default Menu