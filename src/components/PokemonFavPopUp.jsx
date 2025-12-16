// src/components/FavPokemonSelector.jsx
import { useState } from "react";
import useGet from "../hooks/useGet";
import "../styles/PokemonFav.css";

export default function FavPokemonSelector({ onSelect }) {
    const { data, loading } = useGet("https://pokeapi.co/api/v2/pokemon?limit=151");
    const [search, setSearch] = useState("");

    if (loading) return null;

    const filtered = data.results.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleSelect = (pokemon) => {
        const id = pokemon.url.split("/")[6];

        const favData = {
            name: pokemon.name,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        };

        localStorage.setItem("favPokemon", JSON.stringify(favData));

        onSelect(favData);
    };

    return (
        <div className="popup-bg">
            <div className="popup">
                <h2>Elige tu Pokémon favorito</h2>

                <input
                    type="text"
                    placeholder="Buscar Pokémon..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <ul className="selector-list">
                    {filtered.map((p, i) => {
                        const id = p.url.split("/")[6];
                        return (
                            <li key={i} onClick={() => handleSelect(p)}>
                                <img
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                                    alt={p.name}
                                />
                                {p.name}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
