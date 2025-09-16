import "./cadastro.css";

const Cadastro = () => {
  return (
    <div className="cadastro">
      <div className="formulario">
        <h2>Criar Conta</h2>
      <form>
        <input type="text" placeholder="Nome completo" required />
        <input type="email" placeholder="E-mail" required />
        <input type="password" placeholder="Senha" required />
        <input type="Date" placeholder="Data de Aniversário" required/>
        <button type="submit">Cadastrar</button>
      </form>
      </div>
    </div>
  );
};

export default Cadastro;
