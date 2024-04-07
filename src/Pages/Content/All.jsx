import { useState, useEffect, useContext } from "react";
import { Global } from "../../Context";

import "../../Styles/All.css";
import Loader from "../../Components/Loader/OnProgram";
import { Search as Card } from "../../Components/Card";

import { getAllSearch } from "../../Services/Search";

function All() {
  const { token } = useContext(Global);
  const [loader, setLoader] = useState(true);
  const [response, setResponse] = useState({status: false, data: []});

  useEffect(() => {
    async function Jobs() {
      const {status, data} = await getAllSearch(token);

      setResponse({
        status,
        data
      })

      setLoader(false);
    };
    Jobs();
  }, [])

  return !!loader ? (
    <Loader />
  ) : (
    <div className="activated-search-container">
      { !response.status ? (
        <div className="all-search-error-msg">
          <p>Erro ao Carregar Pesquisas do Banco de Dados</p>
        </div>
      ) : (
        <div className="activated-search-display">
          { response.data.map((e, i)=> <Card key={"search-on-" + i} token={token} data={e} />) }
        </div>
      )}
    </div>
  )
}

export default All;