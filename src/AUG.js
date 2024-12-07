import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const AUG = () => {
    const [AUG, setAUG] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchAUG = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const AUGSkins = data.filter((skin) => skin.weapon.name === "AUG");
                setAUG(AUGSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchAUG();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {AUG.map((AUG)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${AUG.rarity.color}60` }}>
                            <img src={AUG.image}></img>
                            <p>{AUG.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default AUG;