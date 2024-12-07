import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const AK47 = () => {
    const [AK47, setAK47] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchAK47 = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const AK47Skins = data.filter((skin) => skin.weapon.name === "AK-47");
                setAK47(AK47Skins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchAK47();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {AK47.map((AK47)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${AK47.rarity.color}60` }}>
                            <img src={AK47.image}></img>
                            <p>{AK47.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default AK47;