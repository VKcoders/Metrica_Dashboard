import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Global as Context } from ".";

import { generateToken } from "../Services/Token";
import { createCache, getCache } from "../utils/cache";

function GlobalState({children}) {
  const [token, setToken] = useState(null);
  const [menuIndex, setMenuIndex] = useState("All");

  const navigate = useNavigate();

  useEffect(() => {
    const tokenCached = getCache('authentication-token');

    if (!tokenCached) {
      navigate('/', { replace: true })
    }

    setToken(tokenCached)
  }, []);

  const loginUser = async (credentials) => {
    try {
      const response = await generateToken(credentials);

      if (!response.status) {
        throw new Error()
      }
      
      createCache('authentication-token', response.token)
      setToken(response.token);
      navigate("/dashboard", { replace: true });
    } catch (error) {
      window.alert("Senha/Usuário Invalido");
      throw new Error();
    }
    
  }

  const obj = {
    token,
    loginUser,
    menuIndex, setMenuIndex
  };

  return <Context.Provider value={obj}>{children}</Context.Provider>;
}

export default GlobalState;