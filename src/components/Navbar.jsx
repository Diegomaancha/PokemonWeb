// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
    const [fav, setFav] = useState(null);

    useEffect(() => {
        const raw = localStorage.getItem("favPokemon");
        if (!raw) return;

        try {
            const parsed = JSON.parse(raw);
            setFav(parsed);
        } catch (error) {
            console.error("FavPokemon corrupto, reseteando...", error);
            localStorage.removeItem("favPokemon");
        }
    }, []);

    return (
        <nav className="nav">
            <h2 className="logo">PokéDex</h2>

            <ul>
                <li><Link to="/">Pokémon</Link></li>
                <li><Link to="/types">Tipos</Link></li>
                <li><Link to="/abilities">Habilidades</Link></li>
                <li><Link to="/items">Objetos</Link></li>
                <li><Link to="/moves">Movimientos</Link></li>
            </ul>

            <div className="fav-container">
                {fav ? (
                    <img className="fav-img" src={fav.img} alt={fav.name} />
                ) : (
                    <span className="no-fav">⭐</span>
                )}
            </div>
        </nav>
    );
}
