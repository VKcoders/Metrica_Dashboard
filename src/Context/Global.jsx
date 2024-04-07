import { useState } from "react";
import { Global as Context } from ".";

function GlobalState({children}) {
  const [credentials, setCredentials] = useState({username: "", password: ""});
  const [token, setToken] = useState(null);

  const [menuIndex, setMenuIndex] = useState("All");

  const obj = {
    credentials, setCredentials,
    token, setToken,
    menuIndex, setMenuIndex
  };

  return <Context.Provider value={obj}>{children}</Context.Provider>;
}

export default GlobalState;