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
import AK47 from './AK47';
import M4A4 from './M4A4';
import GalilAR from './GalilAR';
import M4A1S from './M4A1S';
import FAMAS from './FAMAS';
import AWP from './AWP';
import AUG from './AUG';
import SG553 from './SG553';
import SSG08 from './SSG08';
import SCAR20 from './SCAR20';
import G3SG1 from './G3SG1';
import Negev from './Negev';
import M249 from './M249';
import MAG7 from './MAG7';
import Nova from './Nova';
import SawedOff from './SawedOff';
import XM1014 from './XM1014';
import Karambit from './Karambit';
import Bayonet from './Bayonet';
import UrsusKnife from './UrsusKnife';
import BowieKnife from './BowieKnife';
import TalonKnife from './TalonKnife';
import ButterflyKnife from './ButterflyKnife';
import SurvivalKnife from './SurvivalKnife';
import ClassicKnife from './ClassicKnife';
import StilettoKnife from './StilettoKnife';
import FalchionKnife from './FalchionKnife';
import SkeletonKnife from './SkeletonKnife';
import FlipKnife from './FlipKnife';
import ShadowDaggers from './ShadowDaggers';
import GutKnife from './GutKnife';
import ParacordKnife from './ParacordKnife';
import HuntsmanKnife from './HuntsmanKnife';
import NomadKnife from './NomadKnife';
import KukriKnife from './KukriKnife';
import NavajaKnife from './NavajaKnife';
import M9Bayonet from './M9Bayonet';
import BrokenFangGloves from './BrokenFangGloves';
import DriverGloves from './DriverGloves';
import HandWraps from './HandWraps';
import MotoGloves from './MotoGloves';
import SpecialistGloves from './SpecialistGloves';
import SportGloves from './SportGloves';
import HydraGloves from './HydraGloves';
import BloodhoundGloves from './BloodhoundGloves';
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
          <Route path="Rifles/AK47" element={<AK47 />} />
          <Route path="Rifles/M4A4" element={<M4A4 />} />
          <Route path="Rifles/GalilAR" element={<GalilAR />} />
          <Route path="Rifles/M4A1S" element={<M4A1S />} />
          <Route path="Rifles/FAMAS" element={<FAMAS />} />
          <Route path="Rifles/AWP" element={<AWP />} />
          <Route path="Rifles/AUG" element={<AUG />} />
          <Route path="Rifles/SG553" element={<SG553 />} />
          <Route path="Rifles/SSG08" element={<SSG08 />} />
          <Route path="Rifles/SCAR20" element={<SCAR20 />} />
          <Route path="Rifles/G3SG1" element={<G3SG1 />} />
          <Route path="Heavy/Negev" element={<Negev />} />
          <Route path="Heavy/M249" element={<M249 />} />
          <Route path="Heavy/MAG7" element={<MAG7 />} />
          <Route path="Heavy/Nova" element={<Nova />} />
          <Route path="Heavy/SawedOff" element={<SawedOff />} />
          <Route path="Heavy/XM1014" element={<XM1014 />} />
          <Route path="Knives/Karambit" element={<Karambit />} />
          <Route path="Knives/Bayonet" element={<Bayonet />} />
          <Route path="Knives/UrsusKnife" element={<UrsusKnife />} />
          <Route path="Knives/BowieKnife" element={<BowieKnife />} />
          <Route path="Knives/TalonKnife" element={<TalonKnife />} />
          <Route path="Knives/ButterflyKnife" element={<ButterflyKnife />} />
          <Route path="Knives/SurvivalKnife" element={<SurvivalKnife />} />
          <Route path="Knives/ClassicKnife" element={<ClassicKnife />} />
          <Route path="Knives/StilettoKnife" element={<StilettoKnife />} />
          <Route path="Knives/FalchionKnife" element={<FalchionKnife />} />
          <Route path="Knives/SkeletonKnife" element={<SkeletonKnife />} />
          <Route path="Knives/FlipKnife" element={<FlipKnife />} />
          <Route path="Knives/ShadowDaggers" element={<ShadowDaggers />} />
          <Route path="Knives/GutKnife" element={<GutKnife />} />
          <Route path="Knives/ParacordKnife" element={<ParacordKnife />} />
          <Route path="Knives/HuntsmanKnife" element={<HuntsmanKnife />} />
          <Route path="Knives/NomadKnife" element={<NomadKnife />} />
          <Route path="Knives/KukriKnife" element={<KukriKnife />} />
          <Route path="Knives/NavajaKnife" element={<NavajaKnife />} />
          <Route path="Knives/M9Bayonet" element={<M9Bayonet />} />
          <Route path="Gloves/BrokenFangGloves" element={<BrokenFangGloves />} />
          <Route path="Gloves/DriverGloves" element={<DriverGloves />} />
          <Route path="Gloves/HandWraps" element={<HandWraps />} />
          <Route path="Gloves/MotoGloves" element={<MotoGloves />} />
          <Route path="Gloves/SpecialistGloves" element={<SpecialistGloves />} />
          <Route path="Gloves/SportGloves" element={<SportGloves />} />
          <Route path="Gloves/HydraGloves" element={<HydraGloves />} />
          <Route path="Gloves/BloodhoundGloves" element={<BloodhoundGloves />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
