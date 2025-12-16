import useGet from "../hooks/useGet";
import Loader from "../components/Loader";

export default function Items() {
    const { data, loading } = useGet("https://pokeapi.co/api/v2/item");

    if (loading) return <Loader />;
    if (!Array.isArray(data)) return null;

    return (
        <div className="subpage">
            <h1>Objetos</h1>

            <div className="subpage-list">
                {data.map((item) => (
                    <div key={item.name} className="subpage-item">
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    );
}
