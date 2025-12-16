// src/pages/PokemonList.jsx
import { useState } from "react";
import useGet from "../hooks/useGet";
import PokemonCard from "../Components/PokemonCard";
import Loader from "../components/Loader";
import "../styles/Main.css";

export default function PokemonList() {
    const { data, loading } = useGet("https://pokeapi.co/api/v2/pokemon?limit=151");

    const [selectedType, setSelectedType] = useState("todos");

    if (loading) return <Loader />;

    // FILTRADO POR TIPO
    const filtered =
        selectedType === "todos"
            ? data
            : data.filter((p) => p.types.includes(selectedType));

    return (
        <div className="page">
            <h1>Listado de Pokémon</h1>

            {/* SELECT PARA TIPOS */}
            <label>Filtrar por tipo: </label>
            <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
            >
                <option value="todos">Todos</option>
                {/* Tipos más comunes */}
                <option value="grass">Planta</option>
                <option value="fire">Fuego</option>
                <option value="water">Agua</option>
                <option value="bug">Bicho</option>
                <option value="normal">Normal</option>
                <option value="poison">Veneno</option>
                <option value="electric">Eléctrico</option>
                <option value="ground">Tierra</option>
                <option value="fairy">Hada</option>
                <option value="fighting">Lucha</option>
                <option value="psychic">Psíquico</option>
                <option value="rock">Roca</option>
                <option value="ghost">Fantasma</option>
                <option value="ice">Hielo</option>
                <option value="dragon">Dragón</option>
            </select>

            {/* LISTADO DE CARDS */}
            <div className="pokemon-grid">
                {filtered.map((pokemon, i) => (
                    <PokemonCard key={i} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
}
