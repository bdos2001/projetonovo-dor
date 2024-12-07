import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const MAG7 = () => {
    const [MAG7, setMAG7] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchMAG7 = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const MAG7Skins = data.filter((skin) => skin.weapon.name === "MAG-7");
                setMAG7(MAG7Skins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchMAG7();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {MAG7.map((MAG7)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${MAG7.rarity.color}60` }}>
                            <img src={MAG7.image}></img>
                            <p>{MAG7.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default MAG7;