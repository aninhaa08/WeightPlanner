import './style.scss'

export function Login() {
    return(
        <div className="loginConteudo">
            <h1 id="tituloLogin">Bem-vindo de volta</h1>
            <div id="linhaLogin"></div>
            <div className="caixaLogin">
                <p id="subtituloLogin">Login</p>
                <form id="formLogin" action="">
                    <div className="input" id="input1">
                        <input className="inputForm" id="email" type="email" placeholder="Email" />
                        <div className="detalheInput1"></div>
                    </div>
                    <div className="input" id="input2">
                        <input className="inputForm" id="senha" type="password" placeholder="Senha" />
                        <div className="detalheInput2"></div>
                    </div>
                </form>
            </div>
            <button id="botaoLogin">Logar</button>
            <div className="caixaSemConta">
                <p>Ainda não possui uma conta?</p>
                <a href="/cadastro">Cadastre-se aqui</a>
            </div>
        </div>
    )
}