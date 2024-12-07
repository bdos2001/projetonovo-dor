import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const GutKnife = () => {
    const [GutKnife, setGutKnife] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchGutKnife = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const GutKnifeSkins = data.filter((skin) => skin.weapon.name === "Gut Knife");
                setGutKnife(GutKnifeSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchGutKnife();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {GutKnife.map((GutKnife)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${GutKnife.rarity.color}60` }}>
                            <img src={GutKnife.image}></img>
                            <p>{GutKnife.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default GutKnife;