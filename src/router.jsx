import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Pages/HomePage'
import { Componentes } from './components/Pages/Componentes'

function Router() {

    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/componentes" element={<Componentes />} />
        </Routes>
    )
}

export default Router