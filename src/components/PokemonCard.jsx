import { Link } from "react-router-dom";
import "../styles/PokemonCard.css";

export default function PokemonCard({ pokemon }) {
    if (!pokemon || !pokemon.id) {
        console.error("PokemonCard recibió datos incorrectos:", pokemon);
        return null;
    }

    return (
        <Link to={`/pokemon/${pokemon.id}`} className="card-link">
            <div className="pokemon-card">
                <h3>{pokemon.name.toUpperCase()}</h3>

                <img
                    src={pokemon.sprite}
                    alt={pokemon.name}
                />

                <p><strong>Tipos:</strong></p>
                <ul className="types">
                    {pokemon.types.map((t, i) => (
                        <li key={i}>{t}</li>
                    ))}
                </ul>
            </div>
        </Link>
    );
}
