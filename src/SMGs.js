import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";



const SMGs = () => {
    const [SMGs, setSMGs] = useState([])
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchSMGs = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const SMGsSkins = data.filter((skin) => skin.category.name === "SMGs");
                setSMGs(SMGsSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchSMGs();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }

    return (
        <>
            <h1>SMGs</h1>
            <div className="Galeria">

                {(() => {
                    const MAC10Imgs = [];
                    const MP5Imgs = [];
                    const MP7Imgs = [];
                    const MP9Imgs = [];
                    const PPBizonImgs = [];
                    const P90Imgs = [];
                    const UMPImgs = [];

                    SMGs.forEach((SMGs) => {
                        if (SMGs.weapon.name === "MAC-10") {
                            MAC10Imgs.push(SMGs.image);
                        }
                        if (SMGs.weapon.name === "MP5-SD") {
                            MP5Imgs.push(SMGs.image);
                        }
                        if (SMGs.weapon.name === "MP7") {
                            MP7Imgs.push(SMGs.image);
                        }
                        if (SMGs.weapon.name === "MP9") {
                            MP9Imgs.push(SMGs.image);
                        }
                        if (SMGs.weapon.name === "PP-Bizon") {
                            PPBizonImgs.push(SMGs.image);
                        }
                        if (SMGs.weapon.name === "P90") {
                            P90Imgs.push(SMGs.image);
                        }
                        if (SMGs.weapon.name === "UMP-45") {
                            UMPImgs.push(SMGs.image);
                        }
                    });
                    const randomIndex1 = Math.floor(Math.random() * MAC10Imgs.length);
                    const randomIndex2 = Math.floor(Math.random() * MP5Imgs.length);
                    const randomIndex3 = Math.floor(Math.random() * MP7Imgs.length);
                    const randomIndex4 = Math.floor(Math.random() * MP9Imgs.length);
                    const randomIndex5 = Math.floor(Math.random() * PPBizonImgs.length);
                    const randomIndex6 = Math.floor(Math.random() * P90Imgs.length);
                    const randomIndex7 = Math.floor(Math.random() * UMPImgs.length);

                    return (
                        <>
                            <div className="ItemDaGaleria">
                                <Link to="MAC10"><img src={MAC10Imgs[randomIndex1]} alt="MAC-10" /><p>MAC-10</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="MP5"><img src={MP5Imgs[randomIndex2]} alt="MP5" /><p>MP5-SD</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="MP7"><img src={MP7Imgs[randomIndex3]} alt="MP7" /><p>MP7</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="MP9"><img src={MP9Imgs[randomIndex4]} alt="MP9" /><p>MP9</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="PPBizon"><img src={PPBizonImgs[randomIndex5]} alt="PPBizon" /><p>PP-Bizon</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="P90"><img src={P90Imgs[randomIndex6]} alt="P90" /><p>P90</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="UMP"><img src={UMPImgs[randomIndex7]} alt="UMP" /><p>UMP-45</p></Link> { }
                            </div>
                        </>
                    );

                    return null;
                })()}
            </div>
        </>

    );
}
export default SMGs;