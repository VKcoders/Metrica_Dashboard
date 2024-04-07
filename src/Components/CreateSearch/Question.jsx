import { useState } from "react";

import "../../Styles/CreateSearch/Question.css"
import SaveBock from "../Button/SaveBlock";
import NewQuestion from "../Button/NewQuestion";
import Ready from "../Button/Ready";

function Question() {
    const [allQuestions, setAllQuestion] = useState([]);
    const [blockStates, setBlockStates] = useState({ selected: "", count: 1, ready: false });
    const [current, setCurrent] = useState({ type: null, question: "", answer: "" });

    return (
        <div className="new-container">
            <h2 className="new-title">Perguntas ({blockStates.count < 10 ? "0" + blockStates.count : blockStates.count} de 30)</h2>
            <textarea
                value={current.question}
                disabled={blockStates.ready}
                placeholder="pergunta"
                className="new-question"
                type="text"
                rows={10}
                style={{ resize: 'none' }}
                onChange={({target: { value }}) => setCurrent(p => ({ ...p, question: value }))}
            />
            <p className="new-text">Tipo de Resposta:</p>
            <div className="new-type-container">
                <p
                    id="new-type"
                    style={{backgroundColor: blockStates.selected === "text" && "rgb(171, 173, 170)"}}
                    onClick={() => {
                        if (!!blockStates.ready) return;
                        setBlockStates(p => ({...p, selected: "text"}))
                        setCurrent(p => ({...p, type: 1}))
                    }}
                >
                    Texto
                </p>
                <p
                    id="new-type"
                    style={{backgroundColor: blockStates.selected === "select_num" && "rgb(171, 173, 170)"}}
                    onClick={() => {
                        if (!!blockStates.ready) return;
                        setBlockStates(p => ({...p, selected: "select_num"}))
                        setCurrent(p => ({...p, type: 2}))
                    }}
                >
                    Grau 01 a 05
                </p>
                <p
                    id="new-type" style={{backgroundColor: blockStates.selected === "select_text" && "rgb(171, 173, 170)"}}
                    onClick={() => {
                        if (!!blockStates.ready) return;
                        setBlockStates(p => ({...p, selected: "select_text"}))
                        setCurrent(p => ({...p, type: 3}))
                    }}
                >
                    Seleção
                </p>
            </div>
            {
                blockStates.selected === "select_text" && (
                    <textarea
                        placeholder="exemplo: bonito,um dia de sol,...etc"
                        disabled={blockStates.ready}
                        className="new-question"
                        type="text"
                        rows={4}
                        style={{ resize: 'none' }}
                        onChange={({target: { value }}) => setCurrent(p => ({ ...p, answer: value }))}
                    />
                )
            }
            <br />
            {
                current.question.length > 4 && blockStates.selected !== "" && (
                    <div className="new-btn-container">
                        {
                            !blockStates.ready ? (
                                <>
                                    {
                                        blockStates.count < 30 && (
                                            <NewQuestion 
                                                toList={setAllQuestion}
                                                block={setBlockStates}
                                                reset={setCurrent}
                                                current={current}
                                            />
                                        )
                                    }
                                    <Ready
                                        toList={setAllQuestion}
                                        block={setBlockStates}
                                        current={current}
                                    />
                                </>
                            ) : (
                                <SaveBock data={allQuestions} />
                            )
                        }
                    </div>
                ) 
            }
            
        </div>
    )
}

export default Question;