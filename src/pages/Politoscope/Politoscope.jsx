import React, { useState, useEffect } from "react";
import { Outlet } from "react-router";
import { NavTabItem } from "../../components/Navigation";
import { SearchButton } from "../../components/Search";
import { togglePopup, Popup, Tooltip } from "../../components/Popup";
import { base_api_url } from "../../Config.js";
import "../../components/Buttons.scss";

import "./Politoscope.scss";

function Politoscope() {
  return (
    <>
      <nav className="filters">
        <ul>
          <NavTabItem to="" label="Gouvernement" />
          <NavTabItem to="assemblee" label="Assemblée Nationale" />
          <NavTabItem to="senat" label="Sénat" />
          <NavTabItem to="conseil-constitutionnel" label="Conseil Constitutionnel" />
          <NavTabItem to="parlement-europeen" label="Parlement Européen" />
          <SearchButton />
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

function PolitoscopeGouvernement() {
  const [politicians, setPoliticians] = useState([]);

  useEffect(() => {
    fetch(base_api_url + "politoscope/government/", { mode: "cors" }, { method: "GET" })
      .then((response) => response.json())
      .then((data) => setPoliticians(data));
  }, []);

  return <>
    <div className="politoscope-gouvernement">
      <h1>Gouvernement <button className="button info inline" title="Plus d'informations" onClick={ () => {togglePopup("gouvernement-explication-popup")} }></button></h1>
      <div className="politicians-list">
        {politicians.map((politician, id) => (
          <div key={id} className="politician">
            <figure className="photo"><img src={politician.picture} alt={politician.first_name + " " + politician.last_name} /></figure>
            <h3 className="name">{politician.first_name} {politician.last_name}</h3>
            <p className="role">{politician.role}</p>
            <p className="party">{politician.party}</p>
            <p className="description">{politician.description}</p>
            <a className="button text center tone-3" href={"https://fr.wikipedia.org/wiki/" + politician.first_name + "_" + politician.last_name} target="_blank" rel="noopener noreferrer">Wikipedia</a>
          </div>
        ))}
      </div>
    </div>
    <Popup className="bottom-anchored" id="gouvernement-explication-popup">
      <h2>Qu'est-ce que le Gouvernement ?</h2>
      <p>Le Gouvernement est l'organe <Tooltip data-content="Chargé de l'application des lois et du fonctionnement de l'Etat">exécutif</Tooltip> de la République Française. Il est composé du Premier Ministre et des Ministres.</p>
      <p>Son rôle est de faire appliquer la loi et dispose pour cela de la force publique (Police, Gendarmerie...) et de l'Administration. Il peut de plus proposer des lois au Parlement (Assemblée Nationale et Sénat) et est responsable devant lui. Le Premier Ministre signe des décrets pour les règlementations qui ne relèvent pas du domaine de la loi.</p>
      <h3>Transparence</h3>
      <p>Nous avons pour des raisons pratiques choisis d'intégrer le Président de la République à la liste des membres du Gouvernement, même si celui-ci n'en fait pas partie au regard de la Constitution de la Ve République.</p>
      <p>Les membres du Gouvernement sont triés par ordre d'importance annoncée lors de leur nomination.</p>
    </Popup>
  </>;
}

function PolitoscopeAssembleeNationale() {
  const [politicians, setPoliticians] = useState([]);

  useEffect(() => {
    fetch(base_api_url + "politoscope/nationalassembly/", { mode: "cors" }, { method: "GET" })
      .then((response) => response.json())
      .then((data) => setPoliticians(data));
  }, []);

  return <>
    <div className="politoscope-assemblee-nationale">
      <h1>Assemblée Nationale <button className="button info inline" title="Plus d'informations" onClick={ () => {togglePopup("assemblee-nationale-explication-popup")} }></button></h1>
      <div className="politicians-list">
        {politicians.map((politician, id) => (
          <div key={id} className="politician">
            <figure className="photo"><img src={politician.picture} alt={politician.first_name + " " + politician.last_name} /></figure>
            <h3 className="name">{politician.first_name} {politician.last_name}</h3>
            <p className="role">{politician.role}</p>
            <p className="party">{politician.party}</p>
            <p className="description">{politician.description}</p>
            <a className="button text center tone-3" href={"https://fr.wikipedia.org/wiki/" + politician.first_name + "_" + politician.last_name} target="_blank" rel="noopener noreferrer">Wikipedia</a>
          </div>
        ))}
      </div>
    </div>
    <Popup className="bottom-anchored" id="assemblee-nationale-explication-popup">
      <h2>Qu'est-ce que l'Assemblée Nationale ?</h2>
      <p>L'Assemblée Nationale est la chambre basse du Parlement Français. Elle est composée de 577 députés élus pour 5 ans au suffrage <Tooltip data-content="Tous les citoyen en âge de voter">universel</Tooltip> <Tooltip data-content="Élu directement par la population">direct</Tooltip> <Tooltip data-content="On vote pour une seule personne, non pour une liste">uninominal</Tooltip> majoritaire à deux tours.</p>
      <p>Son rôle est de voter les lois et de contrôler l'action du Gouvernement. Elle est organisée par commissions, spécialisées sur un domaine et peut mener des enquêtes parlementaires.</p>
      <h3>Transparence</h3>
      <p>Les députés sont triés par ordre d'importance (pour le bureau) et par ordre alphabétique sinon.</p>
    </Popup>
  </>;
}

function PolitoscopeSenat() {
  const [politicians, setPoliticians] = useState([]);

  useEffect(() => {
    fetch(base_api_url + "politoscope/senat/", { mode: "cors" }, { method: "GET" })
      .then((response) => response.json())
      .then((data) => setPoliticians(data));
  }, []);

  return <>
    <div className="politoscope-senat">
      <h1>Sénat <button className="button info inline" title="Plus d'informations" onClick={ () => {togglePopup("senat-explication-popup")} }></button></h1>
      <div className="politicians-list">
        {politicians.map((politician, id) => (
          <div key={id} className="politician">
            <figure className="photo"><img src={politician.picture} alt={politician.first_name + " " + politician.last_name} /></figure>
            <h3 className="name">{politician.first_name} {politician.last_name}</h3>
            <p className="role">{politician.role}</p>
            <p className="party">{politician.party}</p>
            <p className="description">{politician.description}</p>
            <a className="button text center tone-3" href={"https://fr.wikipedia.org/wiki/" + politician.first_name + "_" + politician.last_name} target="_blank" rel="noopener noreferrer">Wikipedia</a>
          </div>
        ))}
        </div>
    </div>
    <Popup className="bottom-anchored" id="senat-explication-popup">
      <h2>Qu'est-ce que le Sénat ?</h2>
      <p>Le Sénat est la chambre haute du Parlement Français. Il est composé de 348 sénateurs élus pour 6 ans au suffrage <Tooltip data-content="Élu par un collège de grands électeurs (députés, sénateurs, conseillers municipaux, départementaux, régionaux)">indirect</Tooltip>, rénouvelés par <Tooltip data-content="Tous les 3 ans, la moitié des sénateurs est renouvelée">moitié</Tooltip>. Selon le nombre de sénateurs dans le département le scrutin est <Tooltip data-content="S'il y a 3 sénateurs ou plus dans le département, les sénateurs sont répartis proportionnellement au nombre de suffrages exprimés">proportionnel</Tooltip> ou <Tooltip data-content="S'il y a 1 ou 2 sénateurs dans le département, les sénateurs sont ceux ayant le plus de voix">majoritaire</Tooltip>.</p>
      <p>Son rôle est de voter les lois et de contrôler l'action du Gouvernement (mais avec moins de pouvoirs que l'Assemblée Nationale). Il est organisé par commissions, spécialisées sur un domaine et peut mener des enquêtes parlementaires.</p>
      <h3>Transparence</h3>
      <p>Les sénateurs sont triés par ordre d'importance (pour le bureau) et par ordre alphabétique sinon.</p>
    </Popup>
  </>;
}

function PolitoscopeConseilConstitutionnel() {
  const [politicians, setPoliticians] = useState([]);

  useEffect(() => {
    fetch(base_api_url + "politoscope/constitutionalcouncil/", { mode: "cors" }, { method: "GET" })
      .then((response) => response.json())
      .then((data) => setPoliticians(data));
  }, []);

  return <>
    <div className="politoscope-conseil-constitutionnel">
      <h1>Conseil Constitutionnel <button className="button info inline" title="Plus d'informations" onClick={ () => {togglePopup("conseil-constitutionnel-explication-popup")} }></button></h1>
      <div className="politicians-list">
        {politicians.map((politician, id) => (
          <div key={id} className="politician">
            <figure className="photo"><img src={politician.picture} alt={politician.first_name + " " + politician.last_name} /></figure>
            <h3 className="name">{politician.first_name} {politician.last_name}</h3>
            <p className="role">{politician.role}</p>
            <p className="description">{politician.description}</p>
            <a className="button text center tone-3" href={"https://fr.wikipedia.org/wiki/" + politician.first_name + "_" + politician.last_name} target="_blank" rel="noopener noreferrer">Wikipedia</a>
          </div>
        ))}
      </div>
    </div>
    <Popup className="bottom-anchored" id="conseil-constitutionnel-explication-popup">
      <h2>Qu'est-ce que le Conseil Constitutionnel ?</h2>
      <p>Le Conseil Constitutionnel est chargée de veiller au respect de la Constitution, en particulier de la conformité des lois votées. Il surveille également les élections et référendum et en promulgue les résultats.</p>
      <p>Les membres sont appelés "les Sages" et sont au nombre de 9 : 3 sont nommés par le Président de la République, 3 par le président du Sénat et 3 par le président de l'Assemblée Nationale. Ils sont élus pour un unique mandat de 9 ans et sont renouvelés par tiers. Les anciens Présidents de la République ont également le droit d'y siéger à vie mais peu utilisent ce droit.</p>
      <h3>Transparence</h3>
      <p>Les membres du Conseil Constitutionnel sont triés par ordre d'importance (pour le président du Conseil) et par ordre alphabétique sinon.</p>
    </Popup>
  </>;
}

function PolitoscopeParlementEuropeen() {
  const [politicians, setPoliticians] = useState([]);

  useEffect(() => {
    fetch(base_api_url + "politoscope/europeanparliament/", { mode: "cors" }, { method: "GET" })
      .then((response) => response.json())
      .then((data) => setPoliticians(data));
  }, []);

  return <>
    <div className="politoscope-parlement-europeen">
      <h1>Parlement Européen <button className="button info inline" title="Plus d'informations" onClick={ () => {togglePopup("parlement-europeen-explication-popup")} }></button></h1>
      <div className="politicians-list">
        {politicians.map((politician, id) => (
          <div key={id} className="politician">
            <figure className="photo"><img src={politician.picture} alt={politician.first_name + " " + politician.last_name} /></figure>
            <h3 className="name">{politician.first_name} {politician.last_name}</h3>
            <p className="role">{politician.role}</p>
            <p className="party">{politician.party}</p>
            <p className="description">{politician.description}</p>
            <a className="button text center tone-3" href={"https://fr.wikipedia.org/wiki/" + politician.first_name + "_" + politician.last_name} target="_blank" rel="noopener noreferrer">Wikipedia</a>
          </div>
        ))}
      </div>
    </div>
    <Popup className="bottom-anchored" id="parlement-europeen-explication-popup">
      <h2>Qu'est-ce que le Parlement Européen ?</h2>
      <p>Le Parlement Européen est l'organe parlementaire de l'Union Européenne. Il est composé de 705 députés élus pour 5 ans au suffrage <Tooltip data-content="Tous les citoyen en âge de voter">universel</Tooltip> <Tooltip data-content="Élu directement par la population">direct</Tooltip> <Tooltip data-content="Les eurodéputés de chaque pays sont élus proportionnellement au résultat de leur liste aux élections européennes">proportionnel</Tooltip>.</p>
      <p>Son rôle est de voter les <Tooltip data-content="Lois applicables dans tous les États membres">règlements</Tooltip> et <Tooltip data-content="Objectifs que tout État doit atteindre, mais ils sont libres quant à la forme et aux moyens.">directives</Tooltip> européennes. Il partage le pouvoir législatif avec la <Tooltip data-content="Institution composée d'un commissaire par État membre">Commission européenne</Tooltip>, mais seule cette dernière peut proposer des textes législatif. Les sièges sont répartis entre les pays à peu près proportionnellement à leur population, avec un minimum de 6 eurodéputés par pays.</p>
      <h3>Transparence</h3>
      <p>Nous avons pour des raisons pratiques choisis d'afficher que les eurodéputés français. Pour avoir la liste complète, rendez-vous sur le <a href="https://www.europarl.europa.eu/meps/fr/full-list" target="_blank" rel="noopener noreferrer">site du Parlement européen.</a></p>
      <p>Les eurodéputés sont triés par ordre alphabétique.</p>
    </Popup>
  </>;
}

export { Politoscope, PolitoscopeGouvernement, PolitoscopeAssembleeNationale, PolitoscopeSenat, PolitoscopeConseilConstitutionnel, PolitoscopeParlementEuropeen };