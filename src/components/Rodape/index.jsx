import './style.scss'
import { PiInstagramLogo } from 'react-icons/pi'
import Logo from '../../assets/logoWebBranco.png'

function Rodape() {

    return (
        <>
            <footer>
                <h3 id='tituloRodape' >Desenvolvedoras</h3>
                <div id="linhaRodape"></div>
                <div className="caixaInstagram">
                    <p className="nomeInstagram">Maria Eduarda Loreta</p>
                    <PiInstagramLogo size={15} />
                    <button className='linkInstagram'>@_dudaloreta</button>
                </div>
                <div className="caixaInstagram">
                    <p className="nomeInstagram">Ana Carolina Souto</p>
                    <PiInstagramLogo size={15} />
                    <button className='linkInstagram'>@carol_sm8</button>
                </div>
                <div className="caixaInstagram">
                    <p className="nomeInstagram">Beatriz Novais</p>
                    <PiInstagramLogo size={15} />
                    <button className='linkInstagram'>@vieira_bia1404</button>
                </div>
                <div id="divisorRodape"></div>
                <img src={Logo} alt="" />
                <p id="direitos">Todos os direitos reservados.</p>
            </footer>
        </>
    )
}

export default Rodape
