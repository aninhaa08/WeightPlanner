import './style.scss'
import logoWebBranco from '../../assets/logoWebBranco'

export function Cadastro () {
    const [criar, setCriar] =  useState()



    return (
        <div>
            <div>
                <img src={logoWebBranco} alt="Logotipo da WeightPlanner" />
            </div>

            <h1 id='ConteudoCadastro'>Vem fazer parte do nosso site!</h1>
            <div className='LinhaCadastro'></div>
            <h2 id='SubTitulo'>Cadastrar-se</h2>

            <div className='CaixasDeTexto'>
                <input type="text" />Nome Completo<input/>
                <input type="text" />Email<input/>
                <input type="text" />Senha<input/>
            </div>
            

           <button onClick={criar}>Criar</button>
        </div>
    )
}