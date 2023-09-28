import './style.scss'
import arduino from '../../assets/Arduino.png'
import protoboard from '../../assets/protoboard.png'
import modulo from '../../assets/modConv_img.png'
import botao from '../../assets/botao.png'
import balanca from '../../assets/balanca_img.png'
import jumper from '../../assets/jumpers.png'
import img1 from '../../assets/img1Container.png'
import img2 from '../../assets/img2Container.png'
import img3 from '../../assets/img3Container.png'
import img4 from '../../assets/img4Container.png'
import img5 from '../../assets/img5Container.png'
import img6 from '../../assets/img6Container.png'

export function Componentes() {
    return (
        <div className='componentesConteudo'>
            <h1 id='tituloComponentes'>Componentes e valores</h1>
            <div className="caixaCarrossel">
                <div className="slider1">
                    <img src={arduino} alt="" />
                    <p id='textoSlider1'>Arduino Leonardo</p>
                    <p id='precoSlider1'>R$80</p>
                </div>
                <div className="slider2">
                    <img src={protoboard} alt="" />
                    <p id="textoSlider2">Protoboard</p>
                    <p id="precoSlider2">R$10</p>
                </div>
                <div className="slider3">
                    <img src={modulo} alt="" />
                    <p id="textoSlider3">Módulo Conversor Amplificador HX711</p>
                    <p id="precoSlider3">R$20</p>
                </div>
                <div className="slider4">
                    <img src={botao} alt="" />
                    <p id="textoSlider4">Botões</p>
                    <p id="precoSlider4">R$2</p>
                    <p id='infoSlider4'>cada</p>
                </div>
                <div className="slider5">
                    <img src={balanca} alt="" />
                    <p id="textoSlider5">Balança MDF</p>
                    <p id="precoSlider5">R$60</p>
                </div>
                <div className="slider6">
                    <img src={jumper} alt="" />
                    <p id="textoSlider6">Jumpers</p>
                    <p id="precoSlider6">R$20</p>
                </div>
            </div> 
            <div className="caixaElementos">
                <div className="componentesContainer">
                    <img src={img1} alt="" id="img1" />
                    <img src={img2} alt="" id="img2" />
                    <img src={img3} alt="" id="img3" />
                    <img src={img4} alt="" id="img4" />
                    <img src={img5} alt="" id="img5" />
                    <img src={img6} alt="" id="img6" />
                </div>
            </div>
        </div>
    )
}
