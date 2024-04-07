import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Global } from "../Context";

import "../Styles/Login.css";
import Cover from "../Assets/Cover.png";

import { generateToken } from "../Services/Token";

function LoginPage() {
  const { setToken, credentials, setCredentials } = useContext(Global);
  const navigate = useNavigate();

  const handleClick = async () => {
    const response = await generateToken(credentials);

    if (!response.status) {
      window.alert("Senha/Usuário Invalido");
      setCredentials(prev => ({...prev, password: ""}));
      return;
    }
    
    setToken(response.token);
    navigate("/dashboard");
  }

  const textInput = (name) => {
    const typeName = name === "password" ? "password" : "text";

    const handleChange = ({target}) => {
      const {id, value} = target;
      setCredentials(prev => ({...prev, [id]: value}));
    }

    return (
      <div className="input-container">
        <label className="label" htmlFor={name}>{name}</label>
        <input
          className="input" 
          type={typeName} 
          id={name}
          value={credentials[name]}
          onChange={handleChange}
        />
        <div id="bar" />
      </div>
    )
  }

  return (
    <>
      <img className="cover" src={Cover} alt="Background Cover" />
      <div className="container">
        {textInput('username')}
        {textInput('password')}
        <input 
          className="button"
          type="submit" 
          value="log in"
          onClick={handleClick}
          style={{
            backgroundColor: 
              credentials.username.length <= 4 || credentials.password.length <= 6 ? "gray" : "blue",
            cursor: 
              credentials.username.length <= 4 || credentials.password.length <= 6 ? "default" : "pointer",
          }}
          disabled={credentials.username.length <= 4 || credentials.password.length <= 6}
        />
      </div>
    </>
  )
}

export default LoginPage;
