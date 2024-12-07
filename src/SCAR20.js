import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const SCAR20 = () => {
    const [SCAR20, setSCAR20] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchSCAR20 = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const SCAR20Skins = data.filter((skin) => skin.weapon.name === "SCAR-20");
                setSCAR20(SCAR20Skins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchSCAR20();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {SCAR20.map((SCAR20)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${SCAR20.rarity.color}60` }}>
                            <img src={SCAR20.image}></img>
                            <p>{SCAR20.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default SCAR20;