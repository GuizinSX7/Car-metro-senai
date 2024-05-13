import "./Cadastro.css";
import Button from "react-bootstrap/Button";

function Cadastro() {
  return (
    <div className="geral-cadast">
      <div className="cadast-container1">
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
          <div className="cpf-form-cadast">
            <label className="cpf-cadast">CPF</label>
            <input type="number" className="cpf-cadast-input" />
          </div>
          <div className="celular-form-cadast">
            <label className="celular-cadast">Celular</label>
            <input type="number" className="celular-cadast-input" />
          </div>
          <div className="rua-form-cadast">
            <label className="rua-cadast">Logradouro</label>
            <input type="text" className="rua-cadast-input" />
          </div>
          <div className="bairro-form-cadast">
            <label className="bairro-cadast">Bairro</label>
            <input type="text" className="bairro-cadast-input" />
          </div>
        </form>
      </div>
      <div className="cadast-container2">
        <form className="form-cadast">
          <div className="cidade-form-cadast">
            <label className="cidade-cadast">Cidade</label>
            <input type="text" className="cidade-cadast-input" />
          </div>
          <div className="cep-form-cadast">
            <label className="cep-cadast">CEP</label>
            <input type="number" className="cep-cadast-input" />
          </div>
          <div className="estado-form-cadast">
            <label className="estado-cadast">Estado</label>
            <input type="text" className="estado-cadast-input" />
          </div>
          <div className="senha-form-cadast">
            <label className="senha-cadast">Senha</label>
            <input type="password" className="senha-cadast-input" />
          </div>
          <div className="confirm-senha-form-cadast">
            <label className="confirm-senha-label">Confirmar senha</label>
            <input type="password" className="confirm-senha-input" />
          </div>
          <div className="button-cadast">
            <Button id="cadast-button" href="/" className="login">
              Cadastre-se
            </Button>
            <Button
              id="cadastro-button-cadast"
              href="/"
              className="cadastro"
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
