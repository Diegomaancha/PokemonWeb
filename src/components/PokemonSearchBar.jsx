export default function PokemonSearchBar({ search, onSearchChange, type, onTypeChange }) {
    return (
        <div className="searchbar">
            <div className="search-input-box">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Buscar Pokémon..."
                />

                <button className="search-btn" type="button">
                    🔍
                </button>
            </div>

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
                <option value="fairy">Hada</option>
                <option value="psychic">Psiquico</option>
                <option value="rock">Roca</option>
                <option value="ghost">Fantasma</option>
                <option value="electric">Electrico</option>
                <option value="fighting">Lucha</option>
                <option value="ground">Suelo</option>
                <option value="normal">Normal</option>

            </select>
        </div>
    );
}
