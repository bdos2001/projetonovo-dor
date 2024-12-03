import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const P2000 = () => {
    const [P2000, setP2000] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchP2000 = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const P2000Skins = data.filter((skin) => skin.weapon.name === "P2000");
                setP2000(P2000Skins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchP2000();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {P2000.map((P2000)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${P2000.rarity.color}60` }}>
                            <img src={P2000.image}></img>
                            <p>{P2000.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default P2000;