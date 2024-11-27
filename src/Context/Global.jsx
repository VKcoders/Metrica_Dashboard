import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Global as Context } from ".";

import { generateToken } from "../Services/Token";

function GlobalState({children}) {
  const [token, setToken] = useState(null);
  const [menuIndex, setMenuIndex] = useState("All");

  const navigate = useNavigate();

  const loginUser = async (credentials) => {
    try {
      const response = await generateToken(credentials);
      console.log(response)

      if (!response.status) {
        throw new Error()
      }
      
      setToken(response.token);
      navigate("/dashboard", { replace: true });
    } catch (error) {
      window.alert("Senha/Usuário Invalido");
      throw new Error();
    }
    
  }

  const obj = {
    token, setToken,
    loginUser,
    menuIndex, setMenuIndex
  };

  return <Context.Provider value={obj}>{children}</Context.Provider>;
}

export default GlobalState;