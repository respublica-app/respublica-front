import React from "react";
import { Outlet } from "react-router";
import { NavBarItem } from "../../components/Navigation";

import "./Participer.scss";

function Participer() {
  return (
    <>
      <nav className="tabs">
        <ul>
          <NavBarItem to="" icon="voting_chip" label="Votes" />
          <NavBarItem to="debats" icon="comment" label="Débats" />
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

function ParticiperVotes() {
  return <h1>Votes</h1>;
}

function ParticiperDebats() {
  return <h1>Débats</h1>;
}

export { Participer, ParticiperVotes, ParticiperDebats }