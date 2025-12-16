import useGet from "../hooks/useGet";
import PokemonCard from "../components/PokemonCard";
import Loader from "../components/Loader";

export default function PokemonList({ search, type }) {
    const { data, loading } = useGet("https://pokeapi.co/api/v2/pokemon?limit=151");

    if (loading) return <Loader />;
    if (!Array.isArray(data)) return null;

    const filtered = data.filter(p => {
        const matchName = p.name.toLowerCase().includes(search.toLowerCase());
        const matchType = type === "todos" || p.types.includes(type);
        return matchName && matchType;
    });

    return (
        <div className="page page-with-navbar">
            <h1>Listado de Pokémon</h1>

            <div className="pokemon-grid">
                {filtered.map(pokemon => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
}
