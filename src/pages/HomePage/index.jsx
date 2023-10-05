import './style.scss'
import Dbalanca from '../../assets/3Dbalanca.svg'
import ImgVideo from '../../assets/video.png'
import Rodape from '../../components/Rodape'
import imagemCard1 from '../../assets/imagemCardFrente.svg'
import logo from '../../assets/logoWebBranco.png'
import { Link } from 'react-router-dom'


export function Home() {
    return (
        <div className='homeConteudo'>
            <h1 id='tituloHome'>WeightPlanner</h1>
            <h2 id='subtituloHome'>Pesar nunca foi tão fácil</h2>
            <div id='linha'> </div>
            <div className='ctHome'>
                <p id='textoPrincipal'>Com a WeightPlanner, a balança da atualidade, sua vida se torna muito mais fácil. Com a possibilidade de conectar suas pesagens direto ao Excel, é possível organizar sua vida com um clique!</p>
                <div className="dbalanca"> 
                    <img src={Dbalanca} alt="" /> 
                </div>
                <div className="videoContainer">
                    <h2 id='tituloVideo'>BALANÇA COM ARDUINO LEONARDO – IMPRIMINDO VALORES DIRETO NO EXCEL!</h2>
                    <img src={ImgVideo} alt="" />
                </div>
            </div>
            <div className="caixaCompra">
                <div className="compraWeb">
                    <div className="flip-card">
                        <div className="flip-card-conteudo">
                            <div className="flip-card-frente">
                                <p className="texto">Quer saber como passar pesos obtidos para o Excel de forma fácil?</p>
                                <img src={imagemCard1} alt="" />
                            </div>
                            <div className="flip-card-atras">
                                <img src={logo} alt="" />
                                <p className="texto">Então a WeightPlanner é perfeita para você!</p>
                                <Link to='/cadastro'>
                                    <button id="botaoCard">Comprar</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="compraMobile">
                    <div id="caixaCompraM">
                        <p id="textoCompraM">Se interessou pela balança WeightPlanner?</p>
                        <Link to='/cadastro'>
                            <button id="botaoCompraM">Compre aqui</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Rodape />
        </div>
    )
}