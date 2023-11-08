import './style.scss'
import imgBalanca from '../../assets/balancaSozinha.png'
import { PiX } from "react-icons/pi"
import React, { useState } from 'react';

function Popup(props) {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

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
                    <button onClick={decrement}>-</button>
                    <p>{count}</p>
                    <button onClick={increment}>+</button>
                </div>
                <p className="preco">R$ {count * 80}</p>
            </div>
            <div className='carrinho'>
                <button>Adicionar ao carrinho</button>
            </div>
        </div>
    )
}

export default Popup