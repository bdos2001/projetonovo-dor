import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const GalilAR = () => {
    const [GalilAR, setGalilAR] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchGalilAR = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const GalilARSkins = data.filter((skin) => skin.weapon.name === "Galil AR");
                setGalilAR(GalilARSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchGalilAR();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {GalilAR.map((GalilAR)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${GalilAR.rarity.color}60` }}>
                            <img src={GalilAR.image}></img>
                            <p>{GalilAR.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default GalilAR;