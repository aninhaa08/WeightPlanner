import './style.scss'
import ImgObjetivo from "../../assets/imagemObjetivo.svg"

export function Objetivo () {
    return (
        <body className='ObjetivoConteudo'>
            <h1 id='tituloObjetivo'>Nosso Objetivo</h1>
            <div className='caixa_ct1'>
                <p>Temos como objetivo facilitar a organização de pesagens em grande ou pequena escala.</p>
            </div>
            <div className='caixa_img'>
                <img src= {ImgObjetivo} alt="" />
            </div>
            <div className='caixa_ct2'>
                <p>Ajudando pessoas a regrarem melhor suas alimentações e assim terem uma melhor relação com a comida. Além das demais funcionalidades que a balança pode ter.</p>
            </div>

        </body>
    )
}