import { useState } from "react";
import "../../Styles/Components/ClientCard.css";

function Client({ data, action, selected, i }) {
    const {name, user, password, id} = data;

    const handleClick = () => {
        action(prev => ({...prev, clientId: id, selectedId: i}));
    }
    
    return (
        <div
            className="client-card-container"
            onClick={handleClick}
            style={{backgroundColor: !!selected && "gray"}}
        >
            <p id="client-card-info">{name}</p>
            <p id="client-card-info">{user}</p>
            <p id="client-card-info">{password}</p>
        </div>
    )
}

export default Client;