import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const ButterflyKnife = () => {
    const [ButterflyKnife, setButterflyKnife] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchButterflyKnife = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const ButterflyKnifeSkins = data.filter((skin) => skin.weapon.name === "Butterfly Knife");
                setButterflyKnife(ButterflyKnifeSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchButterflyKnife();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {ButterflyKnife.map((ButterflyKnife)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${ButterflyKnife.rarity.color}60` }}>
                            <img src={ButterflyKnife.image}></img>
                            <p>{ButterflyKnife.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default ButterflyKnife;