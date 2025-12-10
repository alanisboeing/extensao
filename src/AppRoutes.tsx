import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home.js";
import { Login } from "./pages/Auth/Login/login.js";
import { Register } from "./pages/Auth/Register/register.js";
import { Talento } from "./pages/Talento/Talento.js";
import { Atuacao } from "./pages/Admin/Atuacao/Atuacao.js";
import { TalentoAdmin } from "./pages/Admin/Talento/Talento.js";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/talento" element={<Talento />} />
        <Route path="/admin">
          <Route path="atuacao" element={<Atuacao />} />
          <Route path="talento" element={<TalentoAdmin />} />
        </Route>
        <Route path="/talento" element={<Talento />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
