import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Pages/HomePage'
import { Objetivo } from './components/Pages/Objetivo'
import { PublicoAlvo } from './components/Pages/PublicoAlvo'
import { Componentes } from './components/Pages/Componentes'
import { Funcionamento } from './components/Pages/Funcionamento'
import { Bibliografia } from './components/Pages/Bibliografia'


function Router() {

    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/objetivo" element={<Objetivo />}/>
            <Route path="/publico" element={<PublicoAlvo />}/>
            <Route path="/componentes" element={<Componentes />} />
            <Route path="/funcionamento" element={<Funcionamento />}/>
            <Route path="/bibliografia" element={<Bibliografia/>}/>
        </Routes>
    )
}

export default Router