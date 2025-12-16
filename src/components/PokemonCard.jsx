import { Link } from "react-router-dom";
import "../styles/PokemonCard.css";

export default function PokemonCard({ pokemon }) {
    if (!pokemon || !pokemon.id) return null;

    const mainType = pokemon.types[0]; // tipo principal

    return (
        <Link to={`/pokemon/${pokemon.id}`} className="card-link">
            <div className={`pokemon-card type-${mainType}`}>
                <h3>{pokemon.name.toUpperCase()}</h3>

                <img src={pokemon.sprite} alt={pokemon.name} />

                <div className="type-badges">
                    {pokemon.types.map((t, i) => (
                        <span key={i} className={`badge badge-${t}`}>
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
}
