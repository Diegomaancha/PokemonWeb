import useGet from "../hooks/useGet";
import Loader from "../components/Loader";

export default function Abilities() {
    const { data, loading } = useGet("https://pokeapi.co/api/v2/ability");

    if (loading) return <Loader />;
    if (!Array.isArray(data)) return null;

    return (
        <div className="subpage">
            <h1>Habilidades</h1>

            <div className="subpage-list">
                {data.map((ability) => (
                    <div key={ability.name} className="subpage-item">
                        {ability.name}
                    </div>
                ))}
            </div>
        </div>
    );
}
