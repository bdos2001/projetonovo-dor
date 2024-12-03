import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const UMP = () => {
    const [UMP, setUMP] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchUMP = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const UMPSkins = data.filter((skin) => skin.weapon.name === "UMP-45");
                setUMP(UMPSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchUMP();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {UMP.map((UMP)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${UMP.rarity.color}60` }}>
                            <img src={UMP.image}></img>
                            <p>{UMP.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default UMP;