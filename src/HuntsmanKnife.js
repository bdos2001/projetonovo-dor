import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const HuntsmanKnife = () => {
    const [HuntsmanKnife, setHuntsmanKnife] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchHuntsmanKnife = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const HuntsmanKnifeSkins = data.filter((skin) => skin.weapon.name === "Huntsman Knife");
                setHuntsmanKnife(HuntsmanKnifeSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchHuntsmanKnife();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {HuntsmanKnife.map((HuntsmanKnife)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${HuntsmanKnife.rarity.color}60` }}>
                            <img src={HuntsmanKnife.image}></img>
                            <p>{HuntsmanKnife.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default HuntsmanKnife;