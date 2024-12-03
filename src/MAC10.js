import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const MAC10 = () => {
    const [MAC10, setMAC10] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchMAC10 = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const MAC10Skins = data.filter((skin) => skin.weapon.name === "MAC-10");
                setMAC10(MAC10Skins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchMAC10();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {MAC10.map((MAC10)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${MAC10.rarity.color}60` }}>
                            <img src={MAC10.image}></img>
                            <p>{MAC10.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default MAC10;