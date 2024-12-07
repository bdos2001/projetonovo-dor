import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const SSG08 = () => {
    const [SSG08, setSSG08] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchSSG08 = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const SSG08Skins = data.filter((skin) => skin.weapon.name === "SSG 08");
                setSSG08(SSG08Skins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchSSG08();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {SSG08.map((SSG08)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${SSG08.rarity.color}60` }}>
                            <img src={SSG08.image}></img>
                            <p>{SSG08.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default SSG08;