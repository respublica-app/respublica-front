import React from "react";
import { Outlet } from "react-router";
import { NavTabItem } from "../../components/Navigation";
import { SearchButton } from "../../components/Search";

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
  return (
    <div className="politoscope-gouvernement">
      <h1>Gouvernement</h1>
      <div className="politicians-list">
      </div>
    </div>
  );
}

function PolitoscopeAssembleeNationale() {
  return <h1>Assemblée Nationale</h1>;
}

function PolitoscopeSenat() {
  return <h1>Sénat</h1>;
}

function PolitoscopeConseilConstitutionnel() {
  return <h1>Conseil Constitutionnel</h1>;
}

function PolitoscopeParlementEuropeen() {
  return <h1>Parlement Européen</h1>;
}

export { Politoscope, PolitoscopeGouvernement, PolitoscopeAssembleeNationale, PolitoscopeSenat, PolitoscopeConseilConstitutionnel, PolitoscopeParlementEuropeen };