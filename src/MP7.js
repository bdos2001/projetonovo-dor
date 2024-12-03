import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const MP7 = () => {
    const [MP7, setMP7] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchMP7 = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const MP7Skins = data.filter((skin) => skin.weapon.name === "MP7");
                setMP7(MP7Skins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchMP7();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {MP7.map((MP7)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${MP7.rarity.color}60` }}>
                            <img src={MP7.image}></img>
                            <p>{MP7.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default MP7;