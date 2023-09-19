import './style.scss'
// import { Link } from 'react-router-dom'
import Dbalanca from '../../assets/balanca3d.svg'


export function Home() {
    return (
        <div className='homeConteudo'>
            <h1 id='tituloHome'>WeightPlanner</h1>
            <h2 id='subtituloHome'>Pesar nunca foi tão fácil</h2>
            <div id='linha'> </div>
            <div className='ctHome'>
                <p id='textoPrincipal'>Com a WeightPlanner, a balança da atualidade, sua vida se torna muito mais fácil. Com a possibilidade de conectar suas pesagens direto ao Excel, é possível organizar sua vida com um clique!</p>
                <div className="dbalanca"> <img src={Dbalanca} alt="" /> </div>
            </div>
        </div>
    )
}