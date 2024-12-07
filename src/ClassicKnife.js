import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const ClassicKnife = () => {
    const [ClassicKnife, setClassicKnife] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchClassicKnife = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const ClassicKnifeSkins = data.filter((skin) => skin.weapon.name === "Classic Knife");
                setClassicKnife(ClassicKnifeSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchClassicKnife();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {ClassicKnife.map((ClassicKnife)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${ClassicKnife.rarity.color}60` }}>
                            <img src={ClassicKnife.image}></img>
                            <p>{ClassicKnife.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default ClassicKnife;