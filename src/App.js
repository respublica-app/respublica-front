import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';

import "./App.scss";
import Layout from "./components/Layout";
import Feed from "./pages/Feed/Feed";
import { Politoscope, PolitoscopeGouvernement, PolitoscopeAssembleeNationale, PolitoscopeSenat, PolitoscopeConseilConstitutionnel, PolitoscopeParlementEuropeen } from "./pages/Politoscope/Politoscope";
import { Participer, ParticiperVotes, ParticiperDebats } from "./pages/Participer/Participer";
import Outils from "./pages/Outils/Outils";
import Elections from "./pages/Elections/Elections";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Layout />}>
            <Route index element={<Feed />} />
            <Route path="politoscope" element={<Politoscope />}>
              <Route index element={<PolitoscopeGouvernement />} />
              <Route path="assemblee" element={<PolitoscopeAssembleeNationale />} />
              <Route path="senat" element={<PolitoscopeSenat />} />
              <Route path="conseil-constitutionnel" element={<PolitoscopeConseilConstitutionnel />} />
              <Route path="parlement-europeen" element={<PolitoscopeParlementEuropeen />} />
            </Route>
            <Route path="participer" element={<Participer />}>
              <Route index element={<ParticiperVotes/>}/>
              <Route path="debats" element={<ParticiperDebats/>}/>
            </Route>
            <Route path="outils" element={<Outils />} />
            <Route path="elections" element={<Elections />} />
            <Route path="profil" element={<Profile />} />
            <Route path="*" element={<h1>404</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;
