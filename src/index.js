import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './Layout';
import Pistols from './Pistols';
import SMGs from './SMGs';
import Heavy from './Heavy';
import Rifles from './Rifles';
import Knives from './Knives';
import Gloves from './Gloves';
import Home from './Home';
import Glock18 from './Glock18';
import USPs from './USPs';
import P250 from './P250';
import P2000 from './P2000';
import DualBerettas from './DualBerettas';
import CZ75Auto from './CZ75Auto';
import Tec9 from './Tec9';
import FiveSeveN from './FiveSeveN';
import DesertEagle from './DesertEagle';
import R8Revolver from './R8Revolver';
import MAC10 from './MAC10';
import MP5 from './MP5';
import MP7 from './MP7';
import MP9 from './MP9';
import PPBizon from './PPBizon';
import P90 from './P90';
import UMP from './UMP';
import MyLoadout from './MyLoadout';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
export const csgo = "https://bymykel.github.io/CSGO-API/api/en";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="Home" element={<Home />} />
          <Route path="" element={<Home />} />
          <Route path="MyLoadout" element={<MyLoadout />} />
          <Route path="Pistols" element={<Pistols />} />
          <Route path="SMGs" element={<SMGs />} />
          <Route path="Heavy" element={<Heavy />} />
          <Route path="Rifles" element={<Rifles />} />
          <Route path="Knives" element={<Knives />} />
          <Route path="Gloves" element={<Gloves />} />
          <Route path="Pistols/Glock18" element={<Glock18 />} />
          <Route path="Pistols/USPs" element={<USPs />} />
          <Route path="Pistols/P250" element={<P250 />} />
          <Route path="Pistols/P2000" element={<P2000 />} />
          <Route path="Pistols/DualBerettas" element={<DualBerettas />} />
          <Route path="Pistols/CZ75Auto" element={<CZ75Auto />} />
          <Route path="Pistols/Tec9" element={<Tec9 />} />
          <Route path="Pistols/FiveSeveN" element={<FiveSeveN />} />
          <Route path="Pistols/DesertEagle" element={<DesertEagle />} />
          <Route path="Pistols/R8Revolver" element={<R8Revolver />} />
          <Route path="SMGs/MAC10" element={<MAC10 />} />
          <Route path="SMGs/MP5" element={<MP5 />} />
          <Route path="SMGs/MP7" element={<MP7 />} />
          <Route path="SMGs/MP9" element={<MP9 />} />
          <Route path="SMGs/PPBizon" element={<PPBizon />} />
          <Route path="SMGs/P90" element={<P90 />} />
          <Route path="SMGs/UMP" element={<UMP />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
