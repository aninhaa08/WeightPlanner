import './style.scss'
import imgBalanca from '../../assets/balancaSozinha.png'
import { PiX } from "react-icons/pi"

function Popup(props) {
    return (
        <div className="compraConteudo">
            <div className='fechar'>
                <button onClick={props.onClose}>
                    <PiX size={21} />
                </button>
            </div>
            <div className="imgCompra">
                <div>
                    <img src={imgBalanca} alt="" />
                </div>
            </div>
            <h1 className='tituloCompra'>Balança WeightPlanner - preta</h1>
            <p className="descricao">Balança com base em MDF e visor LCD 16x2. Acompanha caixa com suas estruturas também feita de MDF, tudo na cor preta.</p>
            <div className='caixaQP'>
                <div className="quant">
                    <button>-</button>
                    <p>1</p>
                    <button>+</button>
                </div>
                <p className="preco">R$ 80,00</p>
            </div>
            <div className='carrinho'>
                <button>Adicionar ao carrinho</button>
            </div>
        </div>
    )
}

export default Popup