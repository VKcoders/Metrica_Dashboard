import "../../Styles/Button/NewQuestion.css";

function NewQuestion({toList, reset, block, current}) {
    
    const handleClick = () => {
        toList(p => ([...p, current]));
        block(p => ({type: null, question: "", count: p.count + 1}));
        reset({ type: null, question: "", answer: "" });
    }

    return (
        <div className="save-block-container" onClick={handleClick}>
            <p id="save-block-text">Adicionar</p>
        </div>
    )
}

export default NewQuestion;