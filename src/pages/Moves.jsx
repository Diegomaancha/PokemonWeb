import useGet from "../hooks/useGet";
import Loader from "../components/Loader";

export default function Moves() {
    const { data, loading } = useGet("https://pokeapi.co/api/v2/move?limit=60");

    if (loading) return <Loader />;
    if (!data) return <p>Cargando movimientos...</p>;

    return (
        <div className="subpage">
            <h1>Movimientos</h1>

            <ul className="subpage-list">
                {data.map((m, idx) => (
                    <li key={idx}>{m.name}</li>
                ))}
            </ul>
        </div>
    );
}
