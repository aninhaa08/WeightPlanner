function Login() {
    return(
        <div className="login">
            <h1 id="tituloLogin">Bem-vindo de volta</h1>
            <div id="linha"></div>
            <p>Login</p>
            <form action="">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Senha" />
                <p>OIIIIIIIII</p>
            </form>
            <button id="botaoLogin">Logar</button>
            <div className="caixaSemConta">
                <p>Ainda não possui uma conta?</p>
                <a href="/cadastro">Cadastre-se aqui</a>
            </div>
        </div>
    )
}

export default Login