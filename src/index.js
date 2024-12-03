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
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
