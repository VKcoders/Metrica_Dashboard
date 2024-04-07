import { useState, useEffect, useContext } from "react";
import { Global } from "../../Context";

import "../../Styles/CreateSearch/Geral.css";
import Loader from "../../Components/Loader/OnProgram";
import ClientCard from "../../Components/Card/Client";
import SaveBock from "../Button/SaveBlock";

import { getAllClients } from "../../Services/Client";

function Geral() {
    const { token } = useContext(Global);
    const [loader, setLoader] = useState(true);
    const [clients, setClients] = useState([]);

    const [current, setCurrent] = useState({
        selectedId: null,
        clientId: null,
        total: 0,
        qtdUsers: 0,
        meta: 0
    });

    useEffect(() => {
        async function Jobs() {
          const {data} = await getAllClients(token);
    
          setClients(data)
          setLoader(false);
        };
        Jobs();
    }, []);

    useEffect(() => {
        setCurrent(p => ({...p, meta: p.total / p.qtdUsers}));
    }, [current.qtdUsers | current.total | current.clientId])

    

    return !!loader ? (
        <Loader />
    ) : (
        <div className="new-geral-container">
            <h2 className="new-geral-title">Informações Gerais</h2>
            <p className="new-geral-text">Cliente:</p>
            { clients.map((e, i)=> {
                return (
                    <ClientCard
                        key={"client-" + i}
                        action={setCurrent}
                        data={e}
                        i={i}
                        selected={current.selectedId === i}
                    />
                )
            }) }
            <br />
            <div className="new-geral-qtd">
                <label className="new-geral-text">
                    Numero Total de Entrevistas:
                    <input
                        type="number"
                        id="new-geral-input"
                        onChange={({target: {value}}) => setCurrent(p => ({...p, total: value}))}
                    />
                </label>
                <br />
                <label className="new-geral-text">
                    Quantidade de Entrevistadores:
                    <input
                        type="number"
                        id="new-geral-input"
                        onChange={({target: {value}}) => setCurrent(p => ({...p, qtdUsers: value}))}
                    />
                </label>
            </div>
            <p className="new-geral-text" style={{textAlign: "end"}}>Meta por Entrevistador(a): {!current.qtdUsers || !current.total ? "0" : current.meta.toFixed(1)}</p>
            { (!!current.clientId && current.qtdUsers > 0 && current.total > 0) && <SaveBock data={current} /> }
        </div>
    )
}

export default Geral;