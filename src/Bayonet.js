import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const Bayonet = () => {
    const [Bayonet, setBayonet] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchBayonet = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const BayonetSkins = data.filter((skin) => skin.weapon.name === "Bayonet");
                setBayonet(BayonetSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchBayonet();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {Bayonet.map((Bayonet)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${Bayonet.rarity.color}60` }}>
                            <img src={Bayonet.image}></img>
                            <p>{Bayonet.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default Bayonet;