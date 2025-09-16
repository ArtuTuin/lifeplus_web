import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Index";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Exames from "./pages/Exames/Index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path= "/Exames" element={<Exames/>} />
      </Routes>
    </Router>
  );
}

export default App;
