import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const P90 = () => {
    const [P90, setP90] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchP90 = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const P90Skins = data.filter((skin) => skin.weapon.name === "P90");
                setP90(P90Skins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchP90();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {P90.map((P90)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${P90.rarity.color}60` }}>
                            <img src={P90.image}></img>
                            <p>{P90.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default P90;