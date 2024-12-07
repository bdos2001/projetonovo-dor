import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const Nova = () => {
    const [Nova, setNova] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchNova = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const NovaSkins = data.filter((skin) => skin.weapon.name === "Nova");
                setNova(NovaSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchNova();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {Nova.map((Nova)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${Nova.rarity.color}60` }}>
                            <img src={Nova.image}></img>
                            <p>{Nova.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default Nova;