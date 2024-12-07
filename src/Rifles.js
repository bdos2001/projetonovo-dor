import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";



const Rifles = () => {
    const [Rifles, setRifles] = useState([])
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchRifles = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const RiflesSkins = data.filter((skin) => skin.category.name === "Rifles");
                setRifles(RiflesSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchRifles();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }

    return (
        <>
            <h1>Rifles</h1>
            <div className="Galeria">

                {(() => {
                    const AK47Imgs = [];
                    const M4A4Imgs = [];
                    const GalilARImgs = [];
                    const M4A1SImgs = [];
                    const FAMASImgs = [];
                    const AWPImgs = [];
                    const AUGImgs = [];
                    const SG553Imgs = [];
                    const SSG08Imgs = [];
                    const SCAR20Imgs = [];
                    const G3SG1Imgs = [];

                    Rifles.forEach((Rifles) => {
                        if (Rifles.weapon.name === "AK-47") {
                            AK47Imgs.push(Rifles.image);
                        }
                        if (Rifles.weapon.name === "M4A4") {
                            M4A4Imgs.push(Rifles.image);
                        }
                        if (Rifles.weapon.name === "Galil AR") {
                            GalilARImgs.push(Rifles.image);
                        }
                        if (Rifles.weapon.name === "M4A1-S") {
                            M4A1SImgs.push(Rifles.image);
                        }
                        if (Rifles.weapon.name === "FAMAS") {
                            FAMASImgs.push(Rifles.image);
                        }
                        if (Rifles.weapon.name === "AWP") {
                            AWPImgs.push(Rifles.image);
                        }
                        if (Rifles.weapon.name === "AUG") {
                            AUGImgs.push(Rifles.image);
                        }
                        if (Rifles.weapon.name === "SG 553") {
                            SG553Imgs.push(Rifles.image);
                        }
                        if (Rifles.weapon.name === "SSG 08") {
                            SSG08Imgs.push(Rifles.image);
                        }
                        if (Rifles.weapon.name === "SCAR-20") {
                            SCAR20Imgs.push(Rifles.image);
                        }
                        if (Rifles.weapon.name === "G3SG1") {
                            G3SG1Imgs.push(Rifles.image);
                        }
                    });
                    const randomIndex1 = Math.floor(Math.random() * AK47Imgs.length);
                    const randomIndex2 = Math.floor(Math.random() * M4A4Imgs.length);
                    const randomIndex3 = Math.floor(Math.random() * GalilARImgs.length);
                    const randomIndex4 = Math.floor(Math.random() * M4A1SImgs.length);
                    const randomIndex5 = Math.floor(Math.random() * FAMASImgs.length);
                    const randomIndex6 = Math.floor(Math.random() * AWPImgs.length);
                    const randomIndex7 = Math.floor(Math.random() * AUGImgs.length);
                    const randomIndex8 = Math.floor(Math.random() * SG553Imgs.length);
                    const randomIndex9 = Math.floor(Math.random() * SSG08Imgs.length);
                    const randomIndex10 = Math.floor(Math.random() * SCAR20Imgs.length);
                    const randomIndex11 = Math.floor(Math.random() * G3SG1Imgs.length);


                    return (
                        <>
                            <div className="ItemDaGaleria">
                                <Link to="AK47"><img src={AK47Imgs[randomIndex1]} alt="AK47" /><p>AK-47</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="M4A4"><img src={M4A4Imgs[randomIndex2]} alt="M4A4" /><p>M4A4</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="GalilAR"><img src={GalilARImgs[randomIndex3]} alt="GalilAR" /><p>Galil AR</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="M4A1S"><img src={M4A1SImgs[randomIndex4]} alt="M4A1S" /><p>M4A1-S</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="FAMAS"><img src={FAMASImgs[randomIndex5]} alt="FAMAS" /><p>FAMAS</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="AWP"><img src={AWPImgs[randomIndex6]} alt="AWP" /><p>AWP</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="AUG"><img src={AUGImgs[randomIndex7]} alt="AUG" /><p>AUG</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="SG553"><img src={SG553Imgs[randomIndex8]} alt="SG553" /><p>SG 553</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="SSG08"><img src={SSG08Imgs[randomIndex9]} alt="SSG08" /><p>SSG 08</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="SCAR20"><img src={SCAR20Imgs[randomIndex10]} alt="SCAR20" /><p>SCAR-20</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="G3SG1"><img src={G3SG1Imgs[randomIndex11]} alt="G3SG1" /><p>G3SG1</p></Link> { }
                            </div>
                        </>
                    );

                    return null;
                })()}
            </div>
        </>

    );
}
export default Rifles;