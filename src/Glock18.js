import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const Glock18 = () => {
    const [Glock18, setGlock18] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchGlock18 = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const Glock18Skins = data.filter((skin) => skin.weapon.name === "Glock-18");
                setGlock18(Glock18Skins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchGlock18();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {Glock18.map((glock18)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${glock18.rarity.color}60` }}>
                            <img src={glock18.image}></img>
                            <p>{glock18.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default Glock18;