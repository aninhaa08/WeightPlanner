import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/HomePage'
import { Objetivo } from './pages/Objetivo'
import { PublicoAlvo } from './pages/PublicoAlvo'
import { Componentes } from './pages/Componentes'
import { Bibliografia } from './pages/Bibliografia'


function Router() {

    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/objetivo" element={<Objetivo />}/>
            <Route path="/publico" element={<PublicoAlvo />}/>
            <Route path="/componentes" element={<Componentes />} />
            <Route path="/bibliografia" element={<Bibliografia/>}/>
        </Routes>
    )
}

export default Router