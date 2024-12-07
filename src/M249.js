import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const M249 = () => {
    const [M249, setM249] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchM249 = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const M249Skins = data.filter((skin) => skin.weapon.name === "M249");
                setM249(M249Skins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchM249();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {M249.map((M249)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${M249.rarity.color}60` }}>
                            <img src={M249.image}></img>
                            <p>{M249.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default M249;