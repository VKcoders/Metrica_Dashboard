import { useContext } from "react";
import { Search } from "../../Context";
import "../../Styles/Button/SaveBlock.css";

function SaveBock({data}) {
    const { setMarker, setNewSearch } = useContext(Search);
    
    const handleClick = () => {
        setMarker(prev => (prev + 2));
        setNewSearch(prev => ([...prev, data]));
    }

    return (
        <div className="save-block-container" onClick={handleClick}>
            <p id="save-block-text">Salvar Bloco</p>
        </div>
    )
}

export default SaveBock;