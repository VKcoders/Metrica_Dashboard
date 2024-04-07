import { useState } from "react";
import { Search as Context } from ".";

function SearchState({children}) {
  const [marker, setMarker] = useState(0);
  const [newSearch, setNewSearch] = useState([])

  const obj = { marker, setMarker, newSearch, setNewSearch };

  return <Context.Provider value={obj}>{children}</Context.Provider>;
}

export default SearchState;