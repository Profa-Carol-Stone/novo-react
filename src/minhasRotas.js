import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from "./Home";
import Atv01 from "./Atv01";
import Atv02 from "./Atv02";

export default function minhasRotas() {
  return (
    //armazena o local atual na barra de endereços do navegador usando URLs 
    //limpos e navega usando a pilha de histórico integrada do navegador.
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atv01" element={<Atv01 />} />
        <Route path="/atv02" element={<Atv02 />} />
    </Routes>
    </BrowserRouter>
  );
}
