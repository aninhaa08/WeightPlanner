import './style.scss'
import { PiInstagramLogo } from 'react-icons/pi'
import Logo from '../../assets/logoWebBranco.png'

function Rodape() {

    return (
        <footer className='rodape'>
            <div className="ladoDireitoRodape">
                <div className="caixaTitulo">
                    <h3 id='tituloRodape'>Desenvolvedoras</h3>
                    <div id="linhaRodape"></div>
                </div>
                <div className="perfisInstagram">
                    <div className="caixaInstagram">
                        <p className="nomeInstagram">Maria Eduarda Loreta</p>
                        <div className="caixaUser">
                            <PiInstagramLogo className='icone_insta' size={18} />
                            <a href="https://www.instagram.com/_dudaloreta/" target="_blank">
                                <button className='linkInstagram'>@_dudaloreta</button>
                            </a>
                        </div>
                        
                    </div>
                    <div className="caixaInstagram">
                        <p className="nomeInstagram">Ana Carolina Souto</p>
                        <div className="caixaUser">
                            <PiInstagramLogo className='icone_insta'size={18} />
                            <a href="https://www.instagram.com/carol_sm8/" target="_blank">
                                <button className='linkInstagram'>@carol_sm8</button>
                            </a>
                        </div>
                        
                    </div>
                    <div className="caixaInstagram">
                        <p className="nomeInstagram">Beatriz Novais</p>
                        <div className="caixaUser">
                            <PiInstagramLogo className='icone_insta' size={18} />
                            <a href="https://www.instagram.com/vieira_bia1404/" target="_blank">
                                <button className='linkInstagram'>@vieira_bia1404</button>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div id="divisorRodape"></div>
            <div className="caixaDireitos">
                <img src={Logo} alt="" />
                <p id="direitos">Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Rodape