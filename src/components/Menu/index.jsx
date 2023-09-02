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
} from "react-icons/pi";
import { useRef } from 'react';


function Menu() {

  const menuRef = useRef();

  const mostrarMenu = () => {
    menuRef.current.classList.toggle("menuResponsivo");
  }

  return (
    <header>
      <div id='barraNavegacao'>
        <Link to={"/"}>logo</Link>
        {/* <img src="" alt="" /> */} 
        <nav ref={menuRef}>
          <Link to={"/objetivo"}> <PiLightbulb /> </Link>
          <Link to={"/publico"}> <PiChalkboardTeacher /> </Link>
          <Link to={"/componentes"}> <PiWrench /> </Link>
          <Link to={"/funcionamento"}> <PiFilmReel /> </Link>
          <Link to={"/bibliografia"}> <PiBookOpenText /> </Link>

          <button className='botaoMenu botaoFechar' onClick={mostrarMenu}>
            <PiX />
          </button>
        </nav>
        <button className='botaoMenu' onClick={mostrarMenu}>
          <PiList />
        </button>
      </div>
    </header>
  )
}

export default Menu