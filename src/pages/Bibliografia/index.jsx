import './style.scss'
import ImgReferencias from "../../assets/elipseRefe.png"
import ImgMaoRobo from "../../assets/imagemMaoRobo.png"

export function Bibliografia () {
    return (
        <div className='refeConteudo'>
            <div className='refe_principal'>
                <h1 id="tituloRefe">Bibliografia</h1>
                <div className="refe_caixa">
                    <p>Procuramos diversos projetos semelhantes como inspiração para a balança WeightPlanner e a seguir estão os que mais nos ajudaram e serviram de base para o projeto.</p>
                </div>
                <h3 className='refe_subtitulo'>Referências <br className='quebra_linha_refe'/> bibliográficas</h3>
                <div className="container_refe">
                    <div className="content_refe">
                        <a href="https://www.usinainfo.com.br/blog/balanca-com-arduino-leonardo-imprimindo-valores-direto-no-excel/" target="_blank">
                            <img src= {ImgReferencias} alt="" />
                        </a>
                        <p>Blog</p>
                    </div>
                    <div className="content_refe">
                        <a href="https://www.youtube.com/watch?v=-qLfybfvsHw&ab_channel=BrincandocomIdeias" target="_blank">
                            <img src= {ImgReferencias} alt="" />
                        </a>
                        <p>Youtube</p>
                    </div>
                    <div className="content_refe">
                        <a href="https://www.youtube.com/watch?v=V8PHw3e-aPo&ab_channel=BrincandocomIdeias" target="_blank">
                            <img src= {ImgReferencias} alt="" />
                        </a>
                        <p>Youtube</p>
                    </div>
                    <div className="content_refe">
                        <a href="https://blog.eletrogate.com/guia-completo-do-arduino-leonardo/" target="_blank">
                            <img src= {ImgReferencias} alt="" />
                        </a>
                        <p>Blog</p>
                    </div>
                </div>
                <div className='mao_robo_refe'>
                    <img src= {ImgMaoRobo} alt="" />
                </div>
            </div>
        </div>
    )
}