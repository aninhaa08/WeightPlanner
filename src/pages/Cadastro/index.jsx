import './style.scss'
import logoWebBranco from '../../assets/logoWebBranco.png'

export function Cadastro () {

    return (
        <div className="cadastroConteudo">
            <div className="cadastroMobile">
                <h1 id="tituloCadastro">Vem fazer parte do nosso site!</h1>
                <div id="linhaCadastro"></div>
                <div className="caixaCadastro">
                    <p id="subtituloCadastro">Cadastrar-se</p>
                    <form id="formCadastro" action="">
                        <div className="input">
                            <input className="inputFormC" id="nome" type="text" placeholder="Nome completo" />
                            <div></div>
                        </div>
                        <div className="input">
                            <input className="inputFormC" id="email" type="email" placeholder="Email" />
                            <div></div>
                        </div>
                        <div className="input">
                            <input className="inputFormC" id="senha" type="password" placeholder="Senha" />
                            <div></div>
                        </div>
                    </form>
                </div>
                <button id="botaoCadastro">Criar</button>
            </div>
            <div className="cadastroWeb">
                <div className="caixaMaiorC">
                    <div className="caixaMenorC">
                        <img src={logoWebBranco} alt="" />
                        <h1 id="tituloCadastroW">Vem fazer parte do nosso site!</h1>
                        <div id="linhaCadastroW"></div>
                    </div>
                    <div className="caixaCadastroW">
                        <p id="subtituloCadastroW">Cadastrar-se</p>
                        <form id="formCadastroW" action="">
                            <div className="input">
                                <input className="inputFormCW" id="nome" type="text" placeholder="Nome completo" />
                                <div></div>
                            </div>
                            <div className="input">
                                <input className="inputFormCW" id="email" type="email" placeholder="Email" />
                                <div></div>
                            </div>
                            <div className="input">
                                <input className="inputFormCW" id="senha" type="password" placeholder="Senha" />
                                <div></div>
                            </div>
                        </form>
                    </div>
                    <button id="botaoCadastroW">Criar</button>
                </div>
            </div>
        </div>
    )
}