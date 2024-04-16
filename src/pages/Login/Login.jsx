import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="geral">
      <div className="login-container">
        <h1 className="login-name">Login</h1>
        <form className="form-login">
          <div className="usuario-form">
            <label className="user">Usuário</label>
            <input type="text" className="usuario" />
          </div>
          <div className="senha-form">
            <label className="password">Senha</label>
            <input type="password" className="senha" />
          </div>
          <div className="buttons">
            <Link className="login" to="/home">Login</Link>
            <Link className="cadast" to="/cadastro">Cadastre-se</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
