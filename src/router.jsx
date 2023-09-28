import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/HomePage'
import { Login } from './pages/Login'
import { Objetivo } from './pages/Objetivo'
import { PublicoAlvo } from './pages/PublicoAlvo'
import { Componentes } from './pages/Componentes'
import { Bibliografia } from './pages/Bibliografia'
import { Compra } from './pages/Compra'


function Router() {

    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/objetivo" element={<Objetivo />}/>
            <Route path="/publico" element={<PublicoAlvo />}/>
            <Route path="/componentes" element={<Componentes />} />
            <Route path="/bibliografia" element={<Bibliografia/>}/>
            <Route path="/compra" element={<Compra/>}/>
        </Routes>
    )
}

export default Router