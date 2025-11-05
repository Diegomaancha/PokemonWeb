import React, { Component } from "react";

class PokemonCard extends Component {
    render() {
        const { name, image, types } = this.props;

        return (
            <div style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "15px",
                margin: "10px",
                textAlign: "center",
                width: "150px"
            }}>
                <h3>{name.toUpperCase()}</h3>
                <img src={image} alt={name} width="100" />

                <div>
                    <strong>Tipos:</strong>
                    <ul>
                        {types.map((t, i) => (
                            <li key={i}>{t}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default PokemonCard;
