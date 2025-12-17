// src/App.jsx
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar"; // respeta tu estructura
import PokemonList from "./pages/PokemonList";
import Types from "./pages/Types";
import Abilities from "./pages/Abilities";
import Items from "./pages/Items";
import Moves from "./pages/Moves";
import PokemonDetail from "./pages/PokemonDetail";

export default function App() {
    // estado global buscador/filtro (esto se queda)
    const [search, setSearch] = useState("");
    const [type, setType] = useState("todos");

    return (
        <BrowserRouter>
            <Navbar
                search={search}
                onSearchChange={setSearch}
                type={type}
                onTypeChange={setType}
            />

            <Routes>
                <Route path="/" element={<PokemonList search={search} type={type} />} />
                <Route path="/pokemon/:id" element={<PokemonDetail />} />
                <Route path="/types" element={<Types />} />
                <Route path="/abilities" element={<Abilities />} />
                <Route path="/items" element={<Items />} />
                <Route path="/moves" element={<Moves />} />
            </Routes>
        </BrowserRouter>
    );
}
