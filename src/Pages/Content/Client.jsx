import { useState, useEffect, useContext } from "react";
import { Global } from "../../Context";

import "../../Styles/Client.css";
import Loader from "../../Components/Loader/OnProgram";
import { Client as Card } from "../../Components/Card";

import { getAllClients, createClient } from "../../Services/Client";

function Client() {
  const { token } = useContext(Global);
  const [loader, setLoader] = useState(true);
  const [response, setResponse] = useState({status: false, data: []});
  const [searchInput, setSearchInput] = useState('');
  const [list, setList] = useState([]);
  const [newClient, setNewClient] = useState({update: false, modal: false, value: {}});

  useEffect(() => {
    async function Jobs() {
      const {status, data} = await getAllClients(token);

      setResponse({
        status,
        data
      })
      setList(data)
      setLoader(false);
    };
    Jobs();
  }, [newClient.update]);

  useEffect(() => {
    const listFiltered = response.data.filter(({name}) => (name.toLowerCase()).includes(searchInput.toLowerCase()));
    setList(listFiltered);
  }, [searchInput]);

  const handleSubmit = async () => {
    const {status, data} = await createClient(newClient.value, token);
    console.log(data)
    if (!!status) {
      setNewClient({
        update: !newClient.update,
        modal: false,
        value: {}
      });

      return
    };
  }

  return !!loader ? (
    <Loader />
  ) : (
    <>
      <div className="client-container">
        { !response.status ? (
          <div className="client-error-msg">
            <p>Erro ao Carregar Clientes do Banco de Dados</p>
          </div>
        ) : (
          <div className="client-display">
            <div className="client-navigation">
              <input
                value={searchInput}
                type="search"
                placeholder="procurar cliente pelo nome"
                id="client-input-search"
                onChange={({target: {value}}) => setSearchInput(value)}
              />
              <button
                type="button"
                id="new-client"
                onClick={() => setNewClient(p => ({...p, modal: true}))}
              >
                Adicionar
              </button>
            </div>
            <div className="client-row-identification">
              <p id="client-row-identification-text">Nome</p>
              <p id="client-row-identification-text">Usuário</p>
              <p id="client-row-identification-text">Senha</p>
            </div>
              { list.map((e, i)=> <Card key={"client-" + i} data={e} />) }
          </div>
        )}
      </div>


      {!!newClient.modal && 
        <div className="modal-new-client-container">
          <div className="modal-new-client">
            <div className="modal-input-container">
              <label className="modal-client-label" htmlFor="modal-client-name">Nome</label>
              <input 
                id="modal-client-name"
                type="text"
                className="modal-input"
                onChange={({target: {value}}) => setNewClient(p => ({...p, value: {...p.value, name: value}}))}
              />
            </div>
            <div className="modal-input-container">
              <label className="modal-client-label" htmlFor="modal-client-user">Usuário</label>
              <input
                id="modal-client-user"
                type="text"
                className="modal-input"
                onChange={({target: {value}}) => setNewClient(p => ({...p, value: {...p.value, user: value}}))}
              />
            </div>
            <div className="modal-input-container">
              <label className="modal-client-label" htmlFor="modal-client-password">Senha</label>
              <input
                id="modal-client-password"
                type="text"
                className="modal-input"
                onChange={({target: {value}}) => setNewClient(p => ({...p, value: {...p.value, password: value}}))}
              />
            </div>
          <div className="modal-btn-container">
              <button
                type="button"
                id="new-client"
                style={{marginRight: "10px"}}
                onClick={handleSubmit}
              >
                Confirmar
              </button>
              <button
                type="button"
                id="new-client"
                style={{backgroundColor: "red"}}
                onClick={() => setNewClient(p => ({...p, modal: false, value: {}}))}
              >
                Descartar
              </button>
          </div>
          </div>
        </div>
      }


    </>
  )
}

export default Client;