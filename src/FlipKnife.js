import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const FlipKnife = () => {
    const [FlipKnife, setFlipKnife] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchFlipKnife = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const FlipKnifeSkins = data.filter((skin) => skin.weapon.name === "Flip Knife");
                setFlipKnife(FlipKnifeSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchFlipKnife();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {FlipKnife.map((FlipKnife)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${FlipKnife.rarity.color}60` }}>
                            <img src={FlipKnife.image}></img>
                            <p>{FlipKnife.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default FlipKnife;