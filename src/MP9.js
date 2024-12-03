import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const MP9 = () => {
    const [MP9, setMP9] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchMP9 = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const MP9Skins = data.filter((skin) => skin.weapon.name === "MP9");
                setMP9(MP9Skins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchMP9();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {MP9.map((MP9)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${MP9.rarity.color}60` }}>
                            <img src={MP9.image}></img>
                            <p>{MP9.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default MP9;