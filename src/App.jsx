// src/App.jsx
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar"; // si tu carpeta es Components, déjalo así
import FavPokemonSelector from "./components/PokemonFavPopUp";

import PokemonList from "./pages/PokemonList";
import Types from "./pages/Types";
import Abilities from "./pages/Abilities";
import Items from "./pages/Items";
import Moves from "./pages/Moves";
import PokemonDetail from "./pages/PokemonDetail";

export default function App() {
    const [showPopup, setShowPopup] = useState(false);

    // ✅ AÑADIDO: estado global para el buscador/filtro
    const [search, setSearch] = useState("");
    const [type, setType] = useState("todos");

    useEffect(() => {
        const fav = localStorage.getItem("favPokemon");
        if (!fav) setShowPopup(true);
    }, []);

    const handleSelect = (favData) => {
        setShowPopup(false);
    };

    return (
        <BrowserRouter>
            {showPopup && <FavPokemonSelector onSelect={handleSelect} />}

            {/* ✅ AÑADIDO: pasar props al Navbar */}
            <Navbar
                search={search}
                onSearchChange={setSearch}
                type={type}
                onTypeChange={setType}
            />

            <Routes>
                <Route path="/pokemon/:id" element={<PokemonDetail />} />

                {/* ✅ AÑADIDO: pasar props a PokemonList */}
                <Route path="/" element={<PokemonList search={search} type={type} />} />

                <Route path="/types" element={<Types />} />
                <Route path="/abilities" element={<Abilities />} />
                <Route path="/items" element={<Items />} />
                <Route path="/moves" element={<Moves />} />
            </Routes>
        </BrowserRouter>
    );
}
