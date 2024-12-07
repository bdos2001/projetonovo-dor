import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const M4A4 = () => {
    const [M4A4, setM4A4] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchM4A4 = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const M4A4Skins = data.filter((skin) => skin.weapon.name === "M4A4");
                setM4A4(M4A4Skins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchM4A4();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {M4A4.map((M4A4)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${M4A4.rarity.color}60` }}>
                            <img src={M4A4.image}></img>
                            <p>{M4A4.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default M4A4;