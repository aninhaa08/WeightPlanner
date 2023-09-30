import './style.scss'
import ftBalanca from '../../assets/ftBalanca.jpeg'
import Rodape from '../../components/Rodape'

export function Compra () {
    return (
        <div className='Conteudocompra'>
            <div className='ftBalanca'> 
                <img src={ftBalanca} alt="Foto da balança arduino integrada com o excel"/> 
            </div>

            <h1 id='Titulocompra'>BALANÇA COM ARDUINO LEONARDO</h1>
            <p id='Descricao'>Balança desenvolvida com Arduino Leonardo, com visor de pesagem e integração direta com o Excel.</p>
            <div className="preco">
                <p id='btComprar'>R$80</p>
                <p id='btComprar'>Comprar</p>
            </div>
           
            

            <Rodape />
        </div>
    )
}