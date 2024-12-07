import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const AWP = () => {
    const [AWP, setAWP] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchAWP = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const AWPSkins = data.filter((skin) => skin.weapon.name === "AWP");
                setAWP(AWPSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchAWP();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {AWP.map((AWP)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${AWP.rarity.color}60` }}>
                            <img src={AWP.image}></img>
                            <p>{AWP.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default AWP;