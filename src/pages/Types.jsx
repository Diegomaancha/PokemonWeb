import useGet from "../hooks/useGet";
import Loader from "../components/Loader";

export default function Types() {
    const { data, loading } = useGet("https://pokeapi.co/api/v2/type");

    if (loading) return <Loader />;
    if (!Array.isArray(data)) return null;

    return (
        <div className="subpage">
            <h1>Tipos</h1>

            <div className="subpage-list">
                {data.map((type) => (
                    <div key={type.name} className="subpage-item">
                        {type.name}
                    </div>
                ))}
            </div>
        </div>
    );
}
