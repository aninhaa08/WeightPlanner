import './style.scss'
import pubAlvo_img from '../../assets/pubAlvo_img.svg'
import PG_empresas from '../../assets/PG_empresas.svg'
import pessoal from '../../assets/pessoal.svg'
import linha_desktop from "../../assets/linha_desktop.svg"
import linha2_desktop from "../../assets/linha2_desktop.svg"
import linha_pa from '../../assets/linha_pa.svg'
import Rodape from '../../components/Rodape'

export function PublicoAlvo () {
    return (
        <div className='publicoConteudo'>
            <h1 id='tituloPublico'>Público Alvo</h1>

            <div className="main">
                <div className='pubAlvo_img'>
                    <img src={pubAlvo_img} alt="Imagem com gráficos para representar o publico alvo da weightplanner" />
                </div>

                <div className='Conexoes'>
                    <img src={linha_pa} alt="" />
                </div>

                <div className='Conexoes2'>
                    <img src={linha_desktop} alt="" />
                </div>

                <div className="Conexoes3">
                    <img src={linha2_desktop} alt="" />
                </div>

                <div className="caixaPG_Empresas">
                    <div className='PG_Empresas'>
                        <img src={PG_empresas} alt="Icone de maleta" />
                        <h1 id='Subtitulo1'>PEQUENAS E GRANDES EMPRESAS</h1>
                    </div>
                    
                    <p id='texto1'>Podendo ser adaptada para pesagem de estoques, materiais e demais elementos, a balança WeightPlanner serve para o uso em empresas grandes e pequenas.</p>
                </div>
                
                <div className="caixaUsoPessoal">
                    <div className="Pessoal">
                        <img src={pessoal} alt="Icone de uma pessoa" />
                        <h1 id='Subtitulo2'>USO PESSOAL</h1>
                    </div>
                    
                    <p id='texto2'>Permitindo o controle de dietas (por meio da pesagem de alimentos) e demais funcionalidades, a nossa balança se torna, assim, perfeita para uso pessoal também.</p>
                </div>
            </div>
            <Rodape />
        </div>       
    )
}