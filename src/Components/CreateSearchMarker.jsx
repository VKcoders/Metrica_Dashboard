import { useContext } from "react";
import { Search } from "../Context";

import "../Styles/Components/CreateSearchMarker.css";

function CreateSearchMarker () {
    const { marker } = useContext(Search);

    return (
        <div className="create-search-status">
          {
            Array.from({length: 7}).map((_e, i) => {
              const isBar = i % 2 === 0 ? "circle": "bar";
              const circleType = i === marker ? "open": ( marker < i ? "close": "done");
              return (
                <div
                  key={"status-track-" + i}
                  id={`create-search-status-${isBar}`}
                  className={`circle-${circleType}`}
                />
              )
            })
          }
        </div>
    )
}

export default CreateSearchMarker;