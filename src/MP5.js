import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const MP5 = () => {
    const [MP5, setMP5] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchMP5 = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const MP5Skins = data.filter((skin) => skin.weapon.name === "MP5-SD");
                setMP5(MP5Skins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchMP5();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {MP5.map((MP5)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${MP5.rarity.color}60` }}>
                            <img src={MP5.image}></img>
                            <p>{MP5.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default MP5;