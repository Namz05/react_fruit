import React from "react";
import "./Navbar.scss";
import { TfiMenu } from "react-icons/tfi";
import { FiMenu } from "react-icons/fi";


const Navbar = () => {
  return <div className="navbar">
    <div className="laptop">
      <h2 className="logo">
        RexHome
      </h2>
      <div className="navigation">
        <ul className="links-conteneur">
          <li className="links">Residence</li>
          <li className="links">Valeur</li>
          <li className="links">Contact</li>
          <li className="links">C'est parti</li>
          <li className="links">Louer</li>
        </ul>
        <FiMenu className="menu-icon"></FiMenu>
      </div>
    </div>
    <div className="mobile"></div>
  </div>;
  
}

export default Navbar;