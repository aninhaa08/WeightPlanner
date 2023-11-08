import './style.scss'
import React, { useState } from 'react';
import Dbalanca from '../../assets/balancaE3D.png'
import Rodape from '../../components/Rodape'
import imagemCard1 from '../../assets/imagemCardFrente.svg'
import logo from '../../assets/logoWebBranco.png'
import imgSlide from '../../assets/imgSlide.svg'
import Popup from '../../components/Pop_upCompra'
import video from '../../assets/videoFuncionamento.mp4'
import qrCode from '../../assets/qrCode.png'


export function Home(){
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className='homeConteudo'>
            <div className="slide">
                <div className="contentSlide">
                    <h1 id='slidetituloHome'>WeightPlanner</h1>
                    <h2 id='slidesubtituloHome'>Pesar nunca foi tão fácil</h2>
                    <div id='linha_slide'> </div>
                    <p className="textoPrincipal_slide">Com a WeightPlanner, a balança da atualidade, sua vida se torna muito mais fácil. Com a possibilidade de conectar suas pesagens direto ao Excel, é possível organizar sua vida com um clique!</p>
                </div>
                <div className="imgslide">
                    <img src={imgSlide} alt="" />
                </div>
            </div>
            <h1 id='tituloHome'>A WeightPlanner no dia a dia</h1>
            <h2 id='subtituloHome'>Rapidez e praticidade lado a lado em suas pesagens</h2>
            <div id='linha'> </div>
            <div className='ctHome'>
                <p id='textoPrincipal'>Visando o seu conforto e um melhor controle de suas dietas, a WeightPlanner oferece apoio em suas pesagens, modernizando-as e tornando seus registros 80% mais ágeis.</p>
                <div className="dbalanca"> 
                    <img src={Dbalanca} alt="" /> 
                </div>
                <div className="videoContainer">
                    <h2 id='tituloVideo'>BALANÇA COM ARDUINO LEONARDO – IMPRIMINDO VALORES DIRETO NO EXCEL!</h2>
                    <video controls>
                        <source src={video} type='video/mp4'/>
                        Desculpa, o seu navegador não suporta vídeos incorporados!
                    </video>
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
                                <button id="botaoCard" onClick={openPopup}>Comprar</button>
                            </div>
                        </div>
                    </div>
                    {isPopupOpen === true && (
                        <Popup onClose={closePopup}/>
                    )}
                </div>
                <div className="compraMobile">
                    <div id="caixaCompraM">
                        <p id="textoCompraM">Se interessou pela balança WeightPlanner?</p>
                        <div>
                            <button id="botaoCompraM" onClick={openPopup}>Compre aqui</button>
                            {isPopupOpen === true && (
                                <Popup onClose={closePopup}/>
                            )}
                        </div>
                    </div>
                </div>
                <div className='divQR'>
                    <img src={qrCode} alt="" />
                </div>
            </div>
            <Rodape />
        </div>
    )
}