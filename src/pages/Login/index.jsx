import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="formulariolog">
        <h2>Entre</h2>
      <form>
        <input type="email" placeholder="E-mail" required />
        <input type="password" placeholder="Senha" required />
        <button type="submit">Entrar</button>
      </form>
      </div>
    </div>
  );
};

export default Login;
