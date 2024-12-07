import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const HydraGloves = () => {
    const [HydraGloves, setHydraGloves] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchHydraGloves = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const HydraGlovesSkins = data.filter((skin) => skin.weapon.name === "Hydra Gloves");
                setHydraGloves(HydraGlovesSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchHydraGloves();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {HydraGloves.map((HydraGloves)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${HydraGloves.rarity.color}60` }}>
                            <img src={HydraGloves.image}></img>
                            <p>{HydraGloves.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default HydraGloves;