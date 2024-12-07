import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";



const Gloves = () => {
    const [Gloves, setGloves] = useState([])
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchGloves = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const GlovesSkins = data.filter((skin) => skin.category.name === "Gloves");
                setGloves(GlovesSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchGloves();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }

    return (
        <>
            <h1>Gloves</h1>
            <div className="Galeria">

                {(() => {
                    const BrokenFangGlovesImgs = [];
                    const DriverGlovesImgs = [];
                    const HandWrapsImgs = [];
                    const MotoGlovesImgs = [];
                    const SpecialistGlovesImgs = [];
                    const SportGlovesImgs = [];
                    const HydraGlovesImgs = [];
                    const BloodhoundGlovesImgs = [];

                    Gloves.forEach((Gloves) => {
                        if (Gloves.weapon.name === "Broken Fang Gloves") {
                            BrokenFangGlovesImgs.push(Gloves.image);
                        }
                        if (Gloves.weapon.name === "Driver Gloves") {
                            DriverGlovesImgs.push(Gloves.image);
                        }
                        if (Gloves.weapon.name === "Hand Wraps") {
                            HandWrapsImgs.push(Gloves.image);
                        }
                        if (Gloves.weapon.name === "Moto Gloves") {
                            MotoGlovesImgs.push(Gloves.image);
                        }
                        if (Gloves.weapon.name === "Specialist Gloves") {
                            SpecialistGlovesImgs.push(Gloves.image);
                        }
                        if (Gloves.weapon.name === "Sport Gloves") {
                            SportGlovesImgs.push(Gloves.image);
                        }
                        if (Gloves.weapon.name === "Hydra Gloves") {
                            HydraGlovesImgs.push(Gloves.image);
                        }
                        if (Gloves.weapon.name === "Bloodhound Gloves") {
                            BloodhoundGlovesImgs.push(Gloves.image);
                        }
                    });
                    const randomIndex1 = Math.floor(Math.random() * BrokenFangGlovesImgs.length);
                    const randomIndex2 = Math.floor(Math.random() * DriverGlovesImgs.length);
                    const randomIndex3 = Math.floor(Math.random() * HandWrapsImgs.length);
                    const randomIndex4 = Math.floor(Math.random() * MotoGlovesImgs.length);
                    const randomIndex5 = Math.floor(Math.random() * SpecialistGlovesImgs.length);
                    const randomIndex6 = Math.floor(Math.random() * SportGlovesImgs.length);
                    const randomIndex7 = Math.floor(Math.random() * HydraGlovesImgs.length);
                    const randomIndex8 = Math.floor(Math.random() * BloodhoundGlovesImgs.length);

                    return (
                        <>
                            <div className="ItemDaGaleria">
                                <Link to="BrokenFangGloves"><img src={BrokenFangGlovesImgs[randomIndex1]} alt="BrokenFangGloves" /><p>Broken Fang Gloves</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="DriverGloves"><img src={DriverGlovesImgs[randomIndex2]} alt="DriverGloves" /><p>Driver Gloves</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="HandWraps"><img src={HandWrapsImgs[randomIndex3]} alt="HandWraps" /><p>Hand Wraps</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="MotoGloves"><img src={MotoGlovesImgs[randomIndex4]} alt="MotoGloves" /><p>Moto Gloves</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="SpecialistGloves"><img src={SpecialistGlovesImgs[randomIndex5]} alt="SpecialistGloves" /><p>Specialist Gloves</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="SportGloves"><img src={SportGlovesImgs[randomIndex6]} alt="SportGloves" /><p>Sport Gloves</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="HydraGloves"><img src={HydraGlovesImgs[randomIndex7]} alt="HydraGloves" /><p>Hydra Gloves</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="BloodhoundGloves"><img src={BloodhoundGlovesImgs[randomIndex8]} alt="BloodhoundGloves" /><p>Bloodhound Gloves</p></Link> { }
                            </div>
                        </>
                    );

                    return null;
                })()}
            </div>
        </>

    );
}
export default Gloves;