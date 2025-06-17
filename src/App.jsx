import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import President from "./pages/President";
import VicePresident from "./pages/VicePresident";
import Conselho from "./pages/Conselho";
import Pastores from "./pages/Pastores";
import QuemSomos from "./pages/QuemSomos";
import NossaMissao from "./pages/NossaMissao";
import NossaVisao from "./pages/NossaVisao";
import Valores from "./pages/Valores";
import OndeEstamos from "./pages/OndeEstamos";
import Congregacoes from "./pages/Congregacoes";
import Contato from "./pages/Contato";
import Mocidade from "./pages/Mocidade";
import GeracaoTeen from "./pages/GeracaoTeen";
import Kids from "./pages/Kids";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lideranca/presidente" element={<President />} />
        <Route path="/lideranca/vice-presidente" element={<VicePresident />}/>
        <Route path="/lideranca/conselho" element={<Conselho />} />
        <Route path="/lideranca/pastores" element={<Pastores />} />
        <Route path="/sobre-nos/quem-somos" element={<QuemSomos />} />
        <Route path="/sobre-nos/nossa-missao" element={<NossaMissao />} />
        <Route path="/sobre-nos/nossa-visao" element={<NossaVisao />} />
        <Route path="/sobre-nos/valores" element={<Valores />} />
        <Route path="/localizacao/onde-estamos" element={<OndeEstamos />} />
        <Route path="/localizacao/congregacoes" element={<Congregacoes />} />
        <Route path="/localizacao/contato" element={<Contato />} />
        <Route path="/ministerios/mocidade" element={<Mocidade />} />
        <Route path="/ministerios/geracao-teen" element={<GeracaoTeen />} />
        <Route path="/ministerios/kids" element={<Kids />} />
        {/* outras rotas podem vir aqui depois */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
