import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const M9Bayonet = () => {
    const [M9Bayonet, setM9Bayonet] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchM9Bayonet = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const M9BayonetSkins = data.filter((skin) => skin.weapon.name === "M9 Bayonet");
                setM9Bayonet(M9BayonetSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchM9Bayonet();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {M9Bayonet.map((M9Bayonet)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${M9Bayonet.rarity.color}60` }}>
                            <img src={M9Bayonet.image}></img>
                            <p>{M9Bayonet.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default M9Bayonet;