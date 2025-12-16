import useGet from "../hooks/useGet";
import Loader from "../components/Loader";

export default function Moves() {
    const { data, loading } = useGet("https://pokeapi.co/api/v2/move");

    if (loading) return <Loader />;
    if (!Array.isArray(data)) return null;

    return (
        <div className="subpage">
            <h1>Movimientos</h1>

            <div className="subpage-list">
                {data.map((move) => (
                    <div key={move.name} className="subpage-item">
                        {move.name}
                    </div>
                ))}
            </div>
        </div>
    );
}
