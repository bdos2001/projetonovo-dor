import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const M4A1S = () => {
    const [M4A1S, setM4A1S] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchM4A1S = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const M4A1SSkins = data.filter((skin) => skin.weapon.name === "M4A1-S");
                setM4A1S(M4A1SSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchM4A1S();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {M4A1S.map((M4A1S)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${M4A1S.rarity.color}60` }}>
                            <img src={M4A1S.image}></img>
                            <p>{M4A1S.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default M4A1S;