import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout";
import Feed from "./pages/Feed/Feed";
import Politoscope from "./pages/Politoscope/Politoscope";
import Participer from "./pages/Participer/Participer";
import Outils from "./pages/Outils/Outils";
import Elections from "./pages/Elections/Elections";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Feed />} />
          <Route path="politoscope" element={<Politoscope />} />
          <Route path="participer" element={<Participer />} />
          <Route path="outils" element={<Outils />} />
          <Route path="elections" element={<Elections />} />
          <Route path="profil" element={<Profile />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
