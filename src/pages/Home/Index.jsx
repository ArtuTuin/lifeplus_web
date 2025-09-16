import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <h1 className="logo">Life+</h1>
        <nav>
          <Link to="/login" className="nav-link">Entrar</Link>
          <Link to="/cadastro" className="nav-link">Criar Conta</Link>
        </nav>
      </header>

      <main className="main">
        <h2>Organize sua saúde com o PlusLife+</h2>
        <p>
          Gerencie seus medicamentos, receba avisos de horários, armazene exames e encontre farmácias próximas.
        </p>
        <div className="buttons">
          <Link to="/login" className="btn btn-primary">Entrar</Link>
          <Link to="/cadastro" className="btn btn-outline">Criar Conta</Link>
        </div>
      </main>

      <footer className="footer">
        © 2025 PlusLife+. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default Home;
