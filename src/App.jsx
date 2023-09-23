import { BrowserRouter } from 'react-router-dom'
import Router from './router'
import Menu from './components/Menu'
import Rodape from './components/Rodape'


function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Router />
        <Rodape />
      </BrowserRouter>
    </>
  )
}

export default App