import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const SportGloves = () => {
    const [SportGloves, setSportGloves] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchSportGloves = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const SportGlovesSkins = data.filter((skin) => skin.weapon.name === "Sport Gloves");
                setSportGloves(SportGlovesSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchSportGloves();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {SportGloves.map((SportGloves)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${SportGloves.rarity.color}60` }}>
                            <img src={SportGloves.image}></img>
                            <p>{SportGloves.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default SportGloves;