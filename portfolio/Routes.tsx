import { BrowserRouter, Route, Routes } from "react-router-dom";
import Perfil from "./src/pages/perfil/Perfil";
import Contato from "./src/pages/contato/Contato";

function AppRoute( ){

   
    return ( 
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Perfil></Perfil>}></Route>
                <Route path="/perfil" element={<Perfil></Perfil>}></Route>
                <Route path="/contato" element={<Contato></Contato>}></Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default AppRoute;  
