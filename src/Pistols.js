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
                    });
                    const randomIndex1 = Math.floor(Math.random() * glockImgs.length);
                    const randomIndex2 = Math.floor(Math.random() * uspsImgs.length);
                    const randomIndex4 = Math.floor(Math.random() * p250Imgs.length);
                    const randomIndex3 = Math.floor(Math.random() * p2000Imgs.length);

                    return (
                        <>
                            <div className="ItemDaGaleria">
                                <Link to="Glock18"><img src={glockImgs[randomIndex1]} alt="Glock-18" /><p>Glock-18</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="USPs"><img src={uspsImgs[randomIndex2]} alt="USP-S" /><p>USP-S</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="P250"><img src={p250Imgs[randomIndex2]} alt="P250" /><p>P250</p></Link> { }
                                <Link to="P2000"><img src={p2000Imgs[randomIndex2]} alt="P2000" /><p>P2000</p></Link> { }
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