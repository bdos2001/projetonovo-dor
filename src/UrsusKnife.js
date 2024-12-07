import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const UrsusKnife = () => {
    const [UrsusKnife, setUrsusKnife] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchUrsusKnife = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const UrsusKnifeSkins = data.filter((skin) => skin.weapon.name === "Ursus Knife");
                setUrsusKnife(UrsusKnifeSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchUrsusKnife();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {UrsusKnife.map((UrsusKnife)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${UrsusKnife.rarity.color}60` }}>
                            <img src={UrsusKnife.image}></img>
                            <p>{UrsusKnife.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default UrsusKnife;