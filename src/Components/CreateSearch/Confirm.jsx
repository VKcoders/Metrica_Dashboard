import { useContext } from "react";
import { Search, Global } from "../../Context";

import "../../Styles/CreateSearch/Confirm.css";

import CreateSearch from "../../Services/NewSearch";

function Confirm() {
    const { token } = useContext(Global);
    const { newSearch: [geral, intro, questions], setMarker, setNewSearch } = useContext(Search);

    const handleCancel = () => {
        setMarker(0);
        setNewSearch([]);
    };

    const handleConfirm = async () => {
        const { status } = await CreateSearch([geral, intro, questions], token)
        
        if (!status) {
            window.alert("Erro ao criar pesquisa");
            return;
        }
        setNewSearch([]);
        window.alert("Pesquisa criada com sucesso");
        setMarker(0);
    };

    return (
        <div className="new-confirm-container">
            <h2 className="new-confirm-title">Confirmar Informações</h2>
            <div className="new-confirm-submit-container">
                <p style={{backgroundColor: "green"}} id="new-confirm-submit-btn" onClick={handleConfirm}>Salvar</p>
                <p style={{backgroundColor: "red"}} id="new-confirm-submit-btn" onClick={handleCancel}>Cancelar</p>
            </div>
            <p className="new-confirm-text"><u>Informações Gerais</u></p>
            <div className="new-confirm-info-container ">
                <p className="new-confirm-sub-text">Cliente: {geral.clientId}</p>
                <p className="new-confirm-sub-text">Quantidade de Entrevistas: {geral.total}</p>
                <p className="new-confirm-sub-text">Número de Entrevistadores: {geral.qtdUsers}</p>
                <p className="new-confirm-sub-text">Entrevista por Entrevistador: {geral.meta}</p>
            </div>
            <div id="new-confirm-bar" />
            <p className="new-confirm-text"><u>Perguntas da Introdução</u></p>
            <div className="new-confirm-map-info-container">
                <p style={{width: "15%"}} className="new-confirm-map-text">Número</p>
                <p style={{width: "15%"}} className="new-confirm-map-text">Tipo</p>
                <p style={{width: "30%"}} className="new-confirm-map-text">Pergunta</p>
                <p style={{width: "30%"}} className="new-confirm-map-text">Resposta</p>
            </div>
            {
                intro.map((e, i) => (
                    <div className="new-confirm-map-info-container" key={"confirm-intro-" + i}>
                        <p style={{width: "15%"}} className="new-confirm-map-text">{i < 10 ? "0" + (i + 1) : i + 1}</p>
                        <p style={{width: "15%"}} className="new-confirm-map-text">{e.type}</p>
                        <p style={{width: "30%"}} className="new-confirm-map-text">{e.question}</p>
                        <p style={{width: "30%"}} className="new-confirm-map-text">{e.answer === "" ? "Não Predefinida" : e.answer}</p>
                    </div>
                ))
            }
            <div id="new-confirm-bar" />
            <p className="new-confirm-text"><u>Perguntas Principais</u></p>
            <div className="new-confirm-map-info-container">
                <p style={{width: "15%"}} className="new-confirm-map-text">Número</p>
                <p style={{width: "15%"}} className="new-confirm-map-text">Tipo</p>
                <p style={{width: "30%"}} className="new-confirm-map-text">Pergunta</p>
                <p style={{width: "30%"}} className="new-confirm-map-text">Resposta</p>
            </div>
            {
                questions.map((e, i) => (
                    <div className="new-confirm-map-info-container" key={"confirm-intro-" + i}>
                        <p style={{width: "15%"}} className="new-confirm-map-text">{i < 10 ? "0" + (i + 1) : i + 1}</p>
                        <p style={{width: "15%"}} className="new-confirm-map-text">{e.type}</p>
                        <p style={{width: "30%"}} className="new-confirm-map-text">{e.question}</p>
                        <p style={{width: "30%"}} className="new-confirm-map-text">{e.answer === "" ? "Não Predefinida" : e.answer}</p>
                    </div> 
                ))
            }
        </div>
    )
}

export default Confirm;