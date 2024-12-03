import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const FiveSeveN = () => {
    const [FiveSeveN, setFiveSeveN] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchFiveSeveN = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const FiveSeveNSkins = data.filter((skin) => skin.weapon.name === "Five-SeveN");
                setFiveSeveN(FiveSeveNSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchFiveSeveN();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {FiveSeveN.map((FiveSeveN)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${FiveSeveN.rarity.color}60` }}>
                            <img src={FiveSeveN.image}></img>
                            <p>{FiveSeveN.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default FiveSeveN;