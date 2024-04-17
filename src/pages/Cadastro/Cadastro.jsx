import "./Cadastro.css";
import { Link } from "react-router-dom";

function Cadastro(){
    return(
        <div className="geral-cadast">
        <div className="cadast-container">
          <h1 className="cadast-name">Cadastro</h1>
          <form className="form-cadast">
            <div className="nome-form">
              <label className="nome-cadast-label">Nome</label>
              <input type="text" className="nome-cadast-input" />
            </div>
            <div className="email-form">
              <label className="email">Email</label>
              <input type="email" className="email-cadast" />
            </div>
            <div className="senha-form-cadast">
                <label className="senha-cadast">Senha</label>
                <input type="password" className="senha-cadast-input" />
            </div>
            <div className="confirm-senha-form-cadast">
                <label className="confirm-senha-label">Confirmar senha</label>
                <input type="password" className="confirm-senha-input"/>
            </div>
            <div className="button-cadast">
              <Link type="submit" className="login-button" to="/home">Cadastre-se</Link>
              <Link className="cadast-button" to="/">Login</Link>
            </div>
          </form>
        </div>
      </div>
    )
}

export default Cadastro;