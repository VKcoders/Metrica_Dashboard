import { useContext, useState } from "react";
import { Global } from "../Context";

import Logo from "../Assets/Logo.png";
import "../Styles/Components/Menu.css";

import Structure from "../MenuStructure";

function Menu() {
  const { menuIndex, setMenuIndex } = useContext(Global);
  const [menuOpen, setMenuOpen] = useState(true)

  const menuElement = (name, i) => {
    const {img: icon, title} = Structure[name];
    const isSelected = name === menuIndex;

    return (
      <div
        key={`menu-index-${i}`}
        onClick={() => setMenuIndex(name)}
        className={`menu-index ${!menuOpen && "menu-index-close"}`}
        style={{backgroundColor: isSelected && "rgb(56, 62, 73)"}}
      >
          <img id="menu-icon" src={icon} alt={title + " icone"} />
          { !!menuOpen && <p id="menu-index-text">{title}</p> }
      </div>
    )
  }

  return (
    <div className={`menu ${!menuOpen ? "close" : "open"}`}>
      <img 
        id="logo" 
        src={Logo}
        alt="Logo"
        style={{ height: !menuOpen ? "40px": "60px"}}
        onClick={() => setMenuOpen(p => !p)}
      />
      <div className="menu-index-container">
        {
          Object.keys(Structure).map((name, i) => menuElement(name, i))
        }
      </div>
    </div>
  )
}

export default Menu;