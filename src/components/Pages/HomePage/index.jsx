import './style.scss'
import { Link } from 'react-router-dom'
import Dbalanca from '../../../assets/balanca3d.svg'


export function Home() {
    return (
        <div className='homeConteudo'>
            <h1 id='tituloHome'>WeightPlanner</h1>
            <div id='linha' > </div>
            <div className='ctHome'>
            <p id='textoPrincipal' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit harum, optio maxime non nobis error est quod quos tempora eveniet sit totam minus numquam quaerat nam a repellendus exercitationem beatae?</p>
            <div className="dbalanca"> <img src={Dbalanca} alt="" /> </div>
            <div className="containerCard">
                <div id="linhaDireita"></div>
                <div className="girar-card">
                    <div className="girar-card-frente">
                        <div className="frente-card">
                            <p className="textoCard">Precisa de agilidade e praticidade ao pesar?</p>
                            {/* <p>Hover Me</p> */}
                        </div>
                        <div className="atras-card">
                            <p className="textoCard">Então a WeightPlanner é perfeita para você!</p>
                            {/* <p>Leave Me</p> */}
                        </div>
                    </div>
                </div>
                <div id="linhaDireita"></div>
            </div>
        </div>
            
            {/* <Link to={"/componentes"}>Componentes</Link> */}
        </div>
    )
}