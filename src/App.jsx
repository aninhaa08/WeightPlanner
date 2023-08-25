import { BrowserRouter } from 'react-router-dom'
import Router from './router'
import Menu from './components/Gerais/Menu'
// import { Home } from './components/Pages/HomePage'

// import './components/Pages/HomePage/style.scss'

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Router />
      </BrowserRouter>
      {/* <Home /> */}
      
    </>
  )
}

export default App