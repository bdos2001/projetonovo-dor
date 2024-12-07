import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const BrokenFangGloves = () => {
    const [BrokenFangGloves, setBrokenFangGloves] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchBrokenFangGloves = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const BrokenFangGlovesSkins = data.filter((skin) => skin.weapon.name === "Broken Fang Gloves");
                setBrokenFangGloves(BrokenFangGlovesSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchBrokenFangGloves();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {BrokenFangGloves.map((BrokenFangGloves)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${BrokenFangGloves.rarity.color}60` }}>
                            <img src={BrokenFangGloves.image}></img>
                            <p>{BrokenFangGloves.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default BrokenFangGloves;