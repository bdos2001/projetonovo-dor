import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const FAMAS = () => {
    const [FAMAS, setFAMAS] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchFAMAS = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const FAMASSkins = data.filter((skin) => skin.weapon.name === "FAMAS");
                setFAMAS(FAMASSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchFAMAS();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {FAMAS.map((FAMAS)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${FAMAS.rarity.color}60` }}>
                            <img src={FAMAS.image}></img>
                            <p>{FAMAS.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default FAMAS;