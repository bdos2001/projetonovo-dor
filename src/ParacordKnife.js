import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const ParacordKnife = () => {
    const [ParacordKnife, setParacordKnife] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchParacordKnife = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const ParacordKnifeSkins = data.filter((skin) => skin.weapon.name === "Paracord Knife");
                setParacordKnife(ParacordKnifeSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchParacordKnife();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {ParacordKnife.map((ParacordKnife)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${ParacordKnife.rarity.color}60` }}>
                            <img src={ParacordKnife.image}></img>
                            <p>{ParacordKnife.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default ParacordKnife;