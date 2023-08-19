import React, { useState, useEffect } from "react";
import { base_api_url } from "../../Config.js";
import "./Outils.scss";

function Outils() {
  const [outils, setOutils] = useState([]);

  useEffect(() => {
    fetch(base_api_url + "tools/", { mode: "cors" }, { method: "GET" })
      .then((response) => response.json())
      .then((data) => setOutils(data));
  }, []);

  return (
    <>
      <h1>Outils</h1>
      <ul className="outils">
        {outils.map((outil, id) => (
          <li key={id} className="outil">
            <figure className="logo"><img src={"./assets/logos/" + outil.logo} alt={outil.nom} /></figure>
            <h3>{outil.name}</h3>
            <p className="author">par {outil.author}</p>
            <p className="category">{outil.category}</p>
            <p className="description">{outil.description}</p>
            <a href={outil.url} className="link button" target="_blank" rel="noreferrer">Y accéder</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Outils;