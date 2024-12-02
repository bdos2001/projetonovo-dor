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
                    const BFGlovesImgs = [];
                    Gloves.forEach((Gloves) => {
                        if (Gloves.weapon.name === "Broken Fang Gloves") {
                            BFGlovesImgs.push(Gloves.image);
                        }
                    });
                    const randomIndex1 = Math.floor(Math.random() * BFGlovesImgs.length);

                    return (
                        <>
                            <div className="ItemDaGaleria">
                                <Link to="BFGloves"><img src={BFGlovesImgs[randomIndex1]} alt="BFGloves" /><p>Broken Fang Gloves</p></Link> { }
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