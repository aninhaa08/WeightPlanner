import './style.scss'
import { Link } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom'
// import Router from '../../../router'

// import './components/Pages/HomePage/style.scss'

function Menu() {
  return (
    <div id='barraNavegacao'>
      {/* <BrowserRouter>
        <Router />
      </BrowserRouter> */}

      <ul>
        <li> <Link to={"/"}>Home</Link> </li>
      </ul>
      <ul>
        <li> <Link to={"/componentes"}>Componentes</Link> </li>
      </ul>
      
      
    </div>
  )
}

export default Menu