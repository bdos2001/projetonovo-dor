import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";



const Heavy = () => {
    const [Heavy, setHeavy] = useState([])
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchHeavy = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const HeavySkins = data.filter((skin) => skin.category.name === "Heavy");
                setHeavy(HeavySkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchHeavy();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }

    return (
        <>
            <h1>Heavy</h1>
            <div className="Galeria">

                {(() => {
                    const NegevImgs = [];
                    const M249Imgs = [];
                    const MAG7Imgs = [];
                    const NovaImgs = [];
                    const SawedOffImgs = [];
                    const XM1014Imgs = [];

                    Heavy.forEach((Heavy) => {
                        if (Heavy.weapon.name === "Negev") {
                            NegevImgs.push(Heavy.image);
                        }
                        if (Heavy.weapon.name === "M249") {
                            M249Imgs.push(Heavy.image);
                        }
                        if (Heavy.weapon.name === "MAG-7") {
                            MAG7Imgs.push(Heavy.image);
                        }
                        if (Heavy.weapon.name === "Nova") {
                            NovaImgs.push(Heavy.image);
                        }
                        if (Heavy.weapon.name === "Sawed-Off") {
                            SawedOffImgs.push(Heavy.image);
                        }
                        if (Heavy.weapon.name === "XM1014") {
                            XM1014Imgs.push(Heavy.image);
                        }
                    });
                    const randomIndex1 = Math.floor(Math.random() * NegevImgs.length);
                    const randomIndex2 = Math.floor(Math.random() * M249Imgs.length);
                    const randomIndex3 = Math.floor(Math.random() * MAG7Imgs.length);
                    const randomIndex4 = Math.floor(Math.random() * NovaImgs.length);
                    const randomIndex5 = Math.floor(Math.random() * SawedOffImgs.length);
                    const randomIndex6 = Math.floor(Math.random() * XM1014Imgs.length);

                    return (
                        <>
                            <div className="ItemDaGaleria">
                                <Link to="Negev"><img src={NegevImgs[randomIndex1]} alt="Negev" /><p>Negev</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="M249"><img src={M249Imgs[randomIndex2]} alt="M249" /><p>M249</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="MAG7"><img src={MAG7Imgs[randomIndex3]} alt="MAG7" /><p>MAG-7</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="Nova"><img src={NovaImgs[randomIndex4]} alt="Nova" /><p>Nova</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="SawedOff"><img src={SawedOffImgs[randomIndex5]} alt="SawedOff" /><p>Sawed-Off</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="XM1014"><img src={XM1014Imgs[randomIndex6]} alt="XM1014" /><p>XM1014</p></Link> { }
                            </div>
                        </>
                    );

                    return null;
                })()}
            </div>
        </>

    );
}
export default Heavy;