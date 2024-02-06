import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./Componentes/Menu";
import Rodape from "./Componentes/Rodape";
import PaginaPadrao from "./Componentes/PaginaPadrao";
import Post from "./paginas/Post";
import NaoEncontrada from "./paginas/NaoEncontrada";

function AppRoutes() {
  return (
    <BrowserRouter>
        <Menu /> 
        <Routes>
          <Route path="/" element={<PaginaPadrao />}> 
            <Route index element={<Inicio />}/>  
            <Route path="sobremim" element={<SobreMim />} />
          </Route>
          <Route path="posts/:id/*" element={<Post />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
        <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;

{/*
  Na rota "/" a estrutura a ser renderizada é:
  <PaginaPadrao>
    <Inicio />
  </PaginaPadrao>

  Na rota "/sobremim" a estrutura a ser renderizada é:
  <PaginaPadrao>
    <SobreMim />
  </PaginaPadrao>

*/} 
