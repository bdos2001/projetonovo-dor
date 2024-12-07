import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const HandWraps = () => {
    const [HandWraps, setHandWraps] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchHandWraps = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const HandWrapsSkins = data.filter((skin) => skin.weapon.name === "Hand Wraps");
                setHandWraps(HandWrapsSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchHandWraps();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {HandWraps.map((HandWraps)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${HandWraps.rarity.color}60` }}>
                            <img src={HandWraps.image}></img>
                            <p>{HandWraps.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default HandWraps;