import { useEffect, useState } from "react";

export default function useGet(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);

                const res = await fetch(url);
                const json = await res.json();

                // 🟢 LISTA DE POKÉMON
                if (url.includes("/pokemon?")) {
                    const detailed = await Promise.all(
                        json.results.map(async (item) => {
                            const r = await fetch(item.url);
                            const d = await r.json();

                            return {
                                id: d.id,
                                name: d.name,
                                sprite: d.sprites.front_default,
                                types: d.types.map(t => t.type.name),
                            };
                        })
                    );

                    setData(detailed);
                }

                // 🟢 DETALLE DE UN POKÉMON
                else if (url.includes("/pokemon/")) {
                    setData(json);
                }

                // 🟢 CUALQUIER OTRA LISTA (types, abilities, items, moves)
                else if (json.results) {
                    setData(json.results);
                }

                else {
                    setData(null);
                }

            } catch (error) {
                console.error("Error en useGet:", error);
                setData(null);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [url]);

    return { data, loading };
}
