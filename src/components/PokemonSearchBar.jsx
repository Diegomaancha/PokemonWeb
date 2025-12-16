export default function PokemonSearchBar({ search, onSearchChange, type, onTypeChange }) {
    return (
        <div className="searchbar">
            <input
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Buscar Pokémon..."
            />

            <select
                value={type}
                onChange={(e) => onTypeChange(e.target.value)}
            >
                <option value="todos">Todos</option>
                <option value="water">Agua</option>
                <option value="fire">Fuego</option>
                <option value="grass">Planta</option>
                <option value="bug">Bicho</option>
                <option value="poison">Veneno</option>
                <option value="flying">Volador</option>
                <option value="normal">Normal</option>
                {/* deja tus opciones como las tengas, esto es ejemplo */}
            </select>
        </div>
    );
}
