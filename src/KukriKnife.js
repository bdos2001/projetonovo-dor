import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const KukriKnife = () => {
    const [KukriKnife, setKukriKnife] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchKukriKnife = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const KukriKnifeSkins = data.filter((skin) => skin.weapon.name === "Kukri Knife");
                setKukriKnife(KukriKnifeSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchKukriKnife();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {KukriKnife.map((KukriKnife)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${KukriKnife.rarity.color}60` }}>
                            <img src={KukriKnife.image}></img>
                            <p>{KukriKnife.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default KukriKnife;