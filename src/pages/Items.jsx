import useGet from "../hooks/useGet";
import Loader from "../components/Loader";

export default function Items() {
    const { data, loading } = useGet("https://pokeapi.co/api/v2/item?limit=50");

    if (loading) return <Loader />;
    if (!data) return <p>Cargando objetos...</p>;

    return (
        <div className="subpage">
            <h1>Objetos</h1>

            <ul className="subpage-list">
                {data.map((i, idx) => (
                    <li key={idx}>{i.name}</li>
                ))}
            </ul>
        </div>
    );
}
