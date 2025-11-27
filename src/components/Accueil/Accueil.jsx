import React, { useEffect } from "react"
import "./Accueil.scss"
import { SiGooglemaps } from "react-icons/si";
import {image} from "../../autres/data.js"
import { motion,useMotionValue, useTransform, animate } from "motion/react";

const Accueil = () => {
  const countA =useMotionValue(0)
  const countB =useMotionValue(0)
  const countC =useMotionValue(0)

  const roundedA = useTransform(countA,Math.round)
  const roundedB = useTransform(countB,Math.round)
  const roundedC = useTransform(countC,Math.round)

  useEffect(()=>{
    const animationA = animate(countA, 9000, {duration:10})
    const animationB = animate(countB, 3150, {duration:10})
    const animationC = animate(countC, 421, {duration:10})

    return animationA.stop, animationB.stop, animationC.stop;
  },[])

  return(
     <div className="accueil-grid">
    <div className="info">
      <h1>Decouvrez la residence de vos reves</h1>
      <p>
        Touvez une residence n'a jamais ete un tel plaisir
        , faut venir acheter seulement mon ami
      </p>
      <div className="conteneur-recherche">
        <input type="text" />
        <SiGooglemaps className="icon"/>
        <span className="btn">Chercher</span>
      </div>
      <div className="achievements">
        <div className="item">
          <h3>
            <span>+</span>
            <motion.strong>{roundedA}</motion.strong>
          </h3>
          <span>Residence</span>
        </div>
        <div className="item">
          <h3>
            <span>+</span>
            <motion.strong>{roundedB}</motion.strong>
          </h3>
          <span>Client satisfait</span>
        </div>
        <div className="item">
          <h3>
            <span>+</span>
            <motion.strong>{roundedC}</motion.strong>
          </h3>
          <span>Partenaires</span>
        </div>
      </div>
    </div>
    <div className="conteneur-image">
      <img src={image.home1} alt="" />
    </div>
  </div>
  )

};



export default Accueil