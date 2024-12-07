import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const SurvivalKnife = () => {
    const [SurvivalKnife, setSurvivalKnife] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchSurvivalKnife = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const SurvivalKnifeSkins = data.filter((skin) => skin.weapon.name === "Survival Knife");
                setSurvivalKnife(SurvivalKnifeSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchSurvivalKnife();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {SurvivalKnife.map((SurvivalKnife)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${SurvivalKnife.rarity.color}60` }}>
                            <img src={SurvivalKnife.image}></img>
                            <p>{SurvivalKnife.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default SurvivalKnife;