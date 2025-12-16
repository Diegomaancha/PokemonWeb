import useGet from "../hooks/useGet";
import Loader from "../components/Loader";

export default function Abilities() {
    const { data, loading } = useGet("https://pokeapi.co/api/v2/ability?limit=50");

    if (loading) return <Loader />;
    if (!data) return <p>Cargando habilidades...</p>;

    return (
        <div className="subpage">
            <h1>Habilidades</h1>

            <ul className="subpage-list">
                {data.map((a, idx) => (
                    <li key={idx}>{a.name}</li>
                ))}
            </ul>
        </div>
    );
}
