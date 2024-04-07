import { useEffect, useState } from "react";
import "../../Styles/Components/SearchCard.css";

import { getClientById } from "../../Services/Client";

function Search({ data, token }) {
    const { client_id, qtd_users, total, users_meta } = data;
    const [clientName, setClientName] = useState('');
    
    useEffect(() => {
        async function Jobs() {
            const { name } = await getClientById(client_id, token);
            setClientName(name);
        };
        Jobs();
    }, []);

    return (
        <div className="search-card-container">
            <p><strong>{clientName}</strong></p>
            <hr />
            <p>Total de Perguntas: {total}</p>
            <hr />
            <p>Entrevistadores: {qtd_users}</p>
            <p>Meta: {users_meta} perguntas</p>
        </div>
    )
}

export default Search;