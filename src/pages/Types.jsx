import useGet from "../hooks/useGet";
import Loader from "../components/Loader";

export default function Types() {
    const { data, loading } = useGet("https://pokeapi.co/api/v2/type");

    if (loading) return <Loader />;

    // 🔒 Protección REAL (Types la necesita)
    if (!Array.isArray(data)) {
        return <p>Cargando tipos...</p>;
    }

    return (
        <div className="subpage">
            <h1>Tipos de Pokémon</h1>

            <ul className="subpage-list">
                {data.map((t, idx) => (
                    <li key={idx}>{t.name}</li>
                ))}
            </ul>
        </div>
    );
}
