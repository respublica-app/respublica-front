import React, { useState, useEffect } from "react";
import "./Outils.scss";

function Outils() {
  const [outils, setOutils] = useState([]);

  useEffect(() => {
    fetch("./data/outils.json")
      .then((reponse) => reponse.json())
      .then((donnees) => {
        setOutils(donnees.tools);
        console.log(donnees.tools);
      });
  }, []);

  return (
    <>
      <h1>Outils</h1>
      <ul className="outils">
        {outils.map((outil) => (
          <li key={outil.id} className="outil">
            <figure className="logo"><img src={"/assets/logos/" + outil.id + "." + outil.logo_format} alt={outil.nom} /></figure>
            <h3>{outil.name}</h3>
            <p className="author">par {outil.author}</p>
            <p className="category">{outil.category}</p>
            <p className="description">{outil.description}</p>
            <a href={outil.url} class="link button" target="_blank">Y accéder</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Outils;