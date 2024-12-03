import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const PPBizon = () => {
    const [PPBizon, setPPBizon] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchPPBizon = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const PPBizonSkins = data.filter((skin) => skin.weapon.name === "PP-Bizon");
                setPPBizon(PPBizonSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchPPBizon();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {PPBizon.map((PPBizon)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${PPBizon.rarity.color}60` }}>
                            <img src={PPBizon.image}></img>
                            <p>{PPBizon.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default PPBizon;