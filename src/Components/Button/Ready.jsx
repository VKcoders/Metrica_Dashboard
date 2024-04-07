import "../../Styles/Button/Ready.css";

function Ready({toList, block, current}) {    
    const handleClick = () => {
        toList(p => ([...p, current]));
        block(p => ({...p, ready: true}));
    }

    return (
        <div className="save-block-container" onClick={handleClick}>
            <p id="save-block-text">Finalizar Bloco</p>
        </div>
    )
}

export default Ready;