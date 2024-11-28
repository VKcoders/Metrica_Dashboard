import { useState, useContext } from "react";
import { Global } from "../Context";

import "../Styles/Login.css";
import Cover from "../Assets/Cover.png";

function LoginPage() {
  const [credentials, setCredentials] = useState({username: "", password: ""});
  const { loginUser } = useContext(Global)

  const handleClick = async () => {
    try {
      await loginUser(credentials)
    } catch {
      setCredentials(prev => ({...prev, password: ""}));
    }
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
