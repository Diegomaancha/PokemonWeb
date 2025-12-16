import { Link, useLocation } from "react-router-dom";
import PokemonSearchBar from "./PokemonSearchBar";
import "../styles/Navbar.css";

export default function Navbar({ search, onSearchChange, type, onTypeChange }) {
    const location = useLocation();

    // 🔥 SOLO mostramos buscador en la home
    const showSearch = location.pathname === "/";

    return (
        <header className="navbar">
            <div className="navbar-top">
                <h2 className="logo">PokéDex</h2>

                <nav>
                    <Link to="/">Pokémon</Link>
                    <Link to="/types">Tipos</Link>
                    <Link to="/abilities">Habilidades</Link>
                    <Link to="/items">Objetos</Link>
                    <Link to="/moves">Movimientos</Link>
                </nav>
            </div>

            {showSearch && (
                <div className="navbar-bottom">
                    <PokemonSearchBar
                        search={search}
                        onSearchChange={onSearchChange}
                        type={type}
                        onTypeChange={onTypeChange}
                    />
                </div>
            )}
        </header>
    );
}
