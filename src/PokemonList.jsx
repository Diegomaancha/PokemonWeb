import { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";

function PokemonList() {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedType, setSelectedType] = useState("todos");

    useEffect(() => {
        fetchPokemons();
    }, []);

    const fetchPokemons = async () => {
        try {
            const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1328");
            const data = await res.json();

            const detailedPokemons = await Promise.all(
                data.results.map(async (p) => {
                    const detailRes = await fetch(p.url);
                    const detailData = await detailRes.json();

                    return {
                        name: detailData.name,
                        image: detailData.sprites.front_default,
                        types: detailData.types.map((t) => t.type.name),
                    };
                })
            );

            setPokemons(detailedPokemons);
            setLoading(false);
        } catch (error) {
            console.error("Error al obtener Pokémon:", error);
            setLoading(false);
        }
    };

    const filteredPokemons =
        selectedType === "todos"
            ? pokemons
            : pokemons.filter((p) => p.types.includes(selectedType));

    if (loading) return <p>Cargando Pokémon...</p>;

    return (
        <div>
            <div style={{ marginBottom: "20px" }}>
                <label>
                    <strong>Filtrar por tipo: </strong>
                </label>

                <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                >
                    <option value="todos">Todos</option>
                    <option value="fire">Fuego</option>
                    <option value="water">Agua</option>
                    <option value="grass">Planta</option>
                    <option value="electric">Eléctrico</option>
                    <option value="bug">Bicho</option>
                    <option value="normal">Normal</option>
                    <option value="poison">Veneno</option>
                    <option value="fairy">Hada</option>
                    <option value="ground">Tierra</option>
                    <option value="rock">Roca</option>
                    <option value="psychic">Psíquico</option>
                    <option value="dragon">Dragón</option>
                    <option value="ice">Hielo</option>
                    <option value="fighting">Lucha</option>
                    <option value="ghost">Fantasma</option>
                    <option value="steel">Acero</option>
                </select>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {filteredPokemons.map((p, index) => (
                    <PokemonCard
                        key={index}
                        name={p.name}
                        image={p.image}
                        types={p.types}
                    />
                ))}
            </div>
        </div>
    );
}

export default PokemonList;
