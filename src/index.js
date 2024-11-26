import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './Layout';
import Pistols from './Pistols';
import SMGs from './SMGs';
import Shotguns from './Shotguns';
import MachineGuns from './MachineGuns';
import Rifles from './Rifles';
import Knives from './Knives';
import Gloves from './Gloves';
import Home from './Home';
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
          <Route path="Shotguns" element={<Shotguns />} />
          <Route path="MachineGuns" element={<MachineGuns />} />
          <Route path="Rifles" element={<Rifles />} />
          <Route path="Knives" element={<Knives />} />
          <Route path="Gloves" element={<Gloves />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
