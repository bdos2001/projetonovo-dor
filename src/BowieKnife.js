import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const BowieKnife = () => {
    const [BowieKnife, setBowieKnife] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchBowieKnife = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const BowieKnifeSkins = data.filter((skin) => skin.weapon.name === "Bowie Knife");
                setBowieKnife(BowieKnifeSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchBowieKnife();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {BowieKnife.map((BowieKnife)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${BowieKnife.rarity.color}60` }}>
                            <img src={BowieKnife.image}></img>
                            <p>{BowieKnife.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default BowieKnife;