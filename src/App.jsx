import { BrowserRouter } from 'react-router-dom'
import Router from './router'
import Menu from './components/Menu'
import Rodape from './components/Rodape'
// import { Home } from './components/Pages/HomePage'

// import './components/Pages/HomePage/style.scss'

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Router />
        <Rodape />
      </BrowserRouter>
      {/* <Home /> */}
      
    </>
  )
}

export default App