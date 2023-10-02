import './style.scss'
import logo from '../../assets/logoWebBranco.png'

export function Login() {
    return(
        <div className="loginConteudo">
            <div className="loginMobile">
                <h1 id="tituloLogin">Bem-vindo de volta</h1>
                <div id="linhaLogin"></div>
                <div className="caixaLogin">
                    <p id="subtituloLogin">Login</p>
                    <form id="formLogin" action="">
                        <div className="input" id="input1">
                            <input className="inputForm" id="email" type="email" placeholder="Email" />
                            <div></div>
                        </div>
                        <div className="input" id="input2">
                            <input className="inputForm" id="senha" type="password" placeholder="Senha" />
                            <div></div>
                        </div>
                    </form>
                </div>
                <button id="botaoLogin">Logar</button>
                <div className="caixaSemConta">
                    <p>Ainda não possui uma conta?</p>
                    <a href="/cadastro">Cadastre-se aqui</a>
                </div>
            </div>
            <div className="loginWeb">
                <div className="caixaMaior">
                    <div className="caixaMenor">
                        <img src={logo} alt="" />
                        <h1 id="tituloLoginW">Bem-vindo de volta</h1>
                        <div id="linhaLoginW"></div>
                        <div className="caixaSemContaW">
                            <p>Ainda não possui uma conta?</p>
                            <a href="/cadastro">Cadastre-se aqui</a>
                        </div>
                    </div>
                    <div className="caixaLoginW">
                        <p id="subtituloLoginW">Login</p>
                        <form id="formLoginW" action="">
                            <div className="input" id="input1">
                                <input className="inputFormW" id="email" type="email" placeholder="Email" />
                                <div></div>
                            </div>
                            <div className="input" id="input2">
                                <input className="inputFormW" id="senha" type="password" placeholder="Senha" />
                                <div></div>
                            </div>
                        </form>
                    </div>
                    <button id="botaoLoginW">Logar</button>
                </div>
            </div>
        </div>
    )
}