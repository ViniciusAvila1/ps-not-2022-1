import React from "react";
import Geral from "./components/Geral/Geral";
import Autores from "./components/Autores/Autores";
import AutoresEditar from "./components/Autores/AutoresEditar";

import { Route, Routes } from 'react-router-dom'


export default function Routers() {
    return (
        <Routes>
            <Route exact path="/" element={<Geral/>} />
            <Route exact path="/autores" element={<Autores/>} />
            <Route exact path="/autores/:idAutor" element={<AutoresEditar/>} />
        </Routes>
    )
}