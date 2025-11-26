import React from "react"
import "./Accueil.scss"
import { SiGooglemaps } from "react-icons/si";

const Accueil = () => {
  return <div className= "accueil-grid">
    <div className="info">
      <h1>Decouvrez la residence de vos reves</h1>
      <p>Trouvwz une residence n'a jamais ete aussi facile</p>
      <div className="conteneur-recherche">
        <input type="text" />
        <SiGooglemaps className="icon"/>
        span
      </div>
    </div>
  </div>

}

export default Accueil