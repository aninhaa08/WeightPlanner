import './style.scss'
import ImgReferencias from "../../assets/elipseRefe3.png"
import ImgMaoRobo from "../../assets/imagemMaoRobo.png"
import { 
    PiLinkSimple
  } from "react-icons/pi"

export function Bibliografia () {
    return (
        <div>
            <h1 id="tituloRefe">Bibliografia</h1>
            <div className="ct_caixa1">
                <p>Procuramos diversos projetos semelhantes como inspiração para a balança WeightPlanner e a seguir estão os que mais nos ajudaram e serviram de base para o projeto.</p>
            </div>
            <h3 className='refe_subtitulo'>Referências <br/> bibliográficas</h3>
            <div className="container">
                <div className="content">
                    <img href="" src= {ImgReferencias} alt="" />
                    <p>Blog</p>
                </div>
                <div className="content">
                    <img href="" src= {ImgReferencias} alt="" />
                    <p>Youtube</p>
                </div>
                <div className="content">
                    <img href="" src= {ImgReferencias} alt="" />
                    <p>Youtube</p>
                </div>
                <div className="content">
                    <img href="" src= {ImgReferencias} alt="" />
                    <p>Blog</p>
                </div>
            </div>
            <div className='mao_robo'>
                <img src= {ImgMaoRobo} alt="" />
            </div>

        </div>
    )
}