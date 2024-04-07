import State from "../../Context/Search";

import Marker from "../../Components/CreateSearchMarker";
import Infos from "../../Components/CreateSearch";

import "../../Styles/Create.css";

function Create() {
  return (
    <State>
      <div className="create-search-container">
        <Marker />
        <Infos />
      </div>
    </State>
  )
}

export default Create;