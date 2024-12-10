import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";



const Pistols = () => {
    const [Pistols, setPistols] = useState([])
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPistols = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const PistolSkins = data.filter((skin) => skin.category.name === "Pistols");
                setPistols(PistolSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchPistols();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return (
        <>
            <h1>Pistols</h1>
            <div className="Galeria">

                {(() => {
                    const glockImgs = [];
                    const uspsImgs = [];
                    const p250Imgs = [];
                    const p2000Imgs = [];
                    const dualberettasImgs = [];
                    const cz75autoImgs = [];
                    const tec9Imgs = [];
                    const fivesevenImgs = [];
                    const deserteagleImgs = [];
                    const r8revolverImgs = [];

                    Pistols.forEach((pistols) => {
                        if (pistols.weapon.name === "Glock-18") {
                            glockImgs.push(pistols.image);
                        }
                        if (pistols.weapon.name === "USP-S") {
                            uspsImgs.push(pistols.image);
                        }
                        if (pistols.weapon.name === "P250") {
                            p250Imgs.push(pistols.image);
                        }
                        if (pistols.weapon.name === "P2000") {
                            p2000Imgs.push(pistols.image);
                        }
                        if (pistols.weapon.name === "Dual Berettas") {
                            dualberettasImgs.push(pistols.image);
                        }
                        if (pistols.weapon.name === "CZ75-Auto") {
                            cz75autoImgs.push(pistols.image);
                        }
                        if (pistols.weapon.name === "Tec-9") {
                            tec9Imgs.push(pistols.image);
                        }
                        if (pistols.weapon.name === "Five-SeveN") {
                            fivesevenImgs.push(pistols.image);
                        }
                        if (pistols.weapon.name === "Desert Eagle") {
                            deserteagleImgs.push(pistols.image);
                        }
                        if (pistols.weapon.name === "R8 Revolver") {
                            r8revolverImgs.push(pistols.image);
                        }
                    });
                    const randomIndex1 = Math.floor(Math.random() * glockImgs.length);
                    const randomIndex2 = Math.floor(Math.random() * uspsImgs.length);
                    const randomIndex3 = Math.floor(Math.random() * p2000Imgs.length);
                    const randomIndex4 = Math.floor(Math.random() * p250Imgs.length);
                    const randomIndex5 = Math.floor(Math.random() * dualberettasImgs.length);
                    const randomIndex6 = Math.floor(Math.random() * cz75autoImgs.length);
                    const randomIndex7 = Math.floor(Math.random() * tec9Imgs.length);
                    const randomIndex8 = Math.floor(Math.random() * fivesevenImgs.length);
                    const randomIndex9 = Math.floor(Math.random() * deserteagleImgs.length);
                    const randomIndex10 = Math.floor(Math.random() * r8revolverImgs.length);

                    return (
                        <>
                            <div className="ItemDaGaleria">
                                <Link to="Glock18"><img src={glockImgs[randomIndex1]} alt="Glock-18" /><p>Glock-18</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="USPs"><img src={uspsImgs[randomIndex2]} alt="USP-S" /><p>USP-S</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="P2000"><img src={p2000Imgs[randomIndex3]} alt="P2000" /><p>P2000</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="P250"><img src={p250Imgs[randomIndex4]} alt="P250" /><p>P250</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="DualBerettas"><img src={dualberettasImgs[randomIndex5]} alt="DualBerettas" /><p>Dual Berettas</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="CZ75Auto"><img src={cz75autoImgs[randomIndex6]} alt="CZ75Auto" /><p>CZ75-Auto</p></Link> { } 
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="Tec9"><img src={tec9Imgs[randomIndex7]} alt="Tec9" /><p>Tec-9</p></Link> { } 
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="FiveSeveN"><img src={fivesevenImgs[randomIndex8]} alt="FiveSeveN" /><p>Five-SeveN</p></Link> { } 
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="DesertEagle"><img src={deserteagleImgs[randomIndex9]} alt="DesertEagle" /><p>Desert Eagle</p></Link> { } 
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="R8Revolver"><img src={r8revolverImgs[randomIndex10]} alt="R8Revolver" /><p>R8 Revolver</p></Link> { } 
                            </div>
                        </>
                    );

                    return null;
                })()}
            </div>
        </>

    );
}
export default Pistols;