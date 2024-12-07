import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const FalchionKnife = () => {
    const [FalchionKnife, setFalchionKnife] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchFalchionKnife = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const FalchionKnifeSkins = data.filter((skin) => skin.weapon.name === "Falchion Knife");
                setFalchionKnife(FalchionKnifeSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchFalchionKnife();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {FalchionKnife.map((FalchionKnife)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${FalchionKnife.rarity.color}60` }}>
                            <img src={FalchionKnife.image}></img>
                            <p>{FalchionKnife.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default FalchionKnife;