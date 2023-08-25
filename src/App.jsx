import { BrowserRouter } from 'react-router-dom'
import Router from './router'
import { Home } from './components/Pages/HomePage'

import './components/Pages/HomePage/style.scss'

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <Home />
    </>
  )
}

export default App