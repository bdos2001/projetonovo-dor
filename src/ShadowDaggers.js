import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const ShadowDaggers = () => {
    const [ShadowDaggers, setShadowDaggers] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchShadowDaggers = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const ShadowDaggersSkins = data.filter((skin) => skin.weapon.name === "Shadow Daggers");
                setShadowDaggers(ShadowDaggersSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchShadowDaggers();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {ShadowDaggers.map((ShadowDaggers)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${ShadowDaggers.rarity.color}60` }}>
                            <img src={ShadowDaggers.image}></img>
                            <p>{ShadowDaggers.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default ShadowDaggers;