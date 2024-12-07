import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const MotoGloves = () => {
    const [MotoGloves, setMotoGloves] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchMotoGloves = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const MotoGlovesSkins = data.filter((skin) => skin.weapon.name === "Moto Gloves");
                setMotoGloves(MotoGlovesSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchMotoGloves();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {MotoGloves.map((MotoGloves)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${MotoGloves.rarity.color}60` }}>
                            <img src={MotoGloves.image}></img>
                            <p>{MotoGloves.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default MotoGloves;