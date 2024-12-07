import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const BloodhoundGloves = () => {
    const [BloodhoundGloves, setBloodhoundGloves] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchBloodhoundGloves = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const BloodhoundGlovesSkins = data.filter((skin) => skin.weapon.name === "Bloodhound Gloves");
                setBloodhoundGloves(BloodhoundGlovesSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchBloodhoundGloves();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {BloodhoundGloves.map((BloodhoundGloves)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${BloodhoundGloves.rarity.color}60` }}>
                            <img src={BloodhoundGloves.image}></img>
                            <p>{BloodhoundGloves.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default BloodhoundGloves;