// src/pages/PokemonDetail.jsx
import { useParams } from "react-router-dom";
import useGet from "../hooks/useGet";
import "../styles/PokemonDetail.css";

export default function PokemonDetail() {
    const { id } = useParams();
    const { data, loading } = useGet(`https://pokeapi.co/api/v2/pokemon/${id}`);

    if (loading) return <h2 className="loading">Cargando...</h2>;

    // Stats aleatorios estilo Pokémon GO
    const combatPoints = Math.floor(Math.random() * (3500 - 1000) + 1000);

    return (
        <div className="pokemon-detail">
            <h1>{data.name.toUpperCase()}</h1>

            <img
                className="pokemon-big"
                src={data.sprites.other["official-artwork"].front_default}
                alt={data.name}
            />

            <div className="info-box">
                <h2>Puntos de Combate</h2>
                <p className="cp">{combatPoints} CP</p>
            </div>

            <div className="info-box">
                <h2>Habilidades</h2>
                <ul>
                    {data.abilities.map((a, i) => (
                        <li key={i}>{a.ability.name}</li>
                    ))}
                </ul>
            </div>

            <div className="info-box">
                <h2>Ataques</h2>
                <ul>
                    {data.moves.slice(0, 10).map((m, i) => (
                        <li key={i}>{m.move.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
