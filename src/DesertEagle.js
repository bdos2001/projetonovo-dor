import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const DesertEagle = () => {
    const [DesertEagle, setDesertEagle] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchDesertEagle = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const DesertEagleSkins = data.filter((skin) => skin.weapon.name === "Desert Eagle");
                setDesertEagle(DesertEagleSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchDesertEagle();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {DesertEagle.map((DesertEagle)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${DesertEagle.rarity.color}60` }}>
                            <img src={DesertEagle.image}></img>
                            <p>{DesertEagle.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default DesertEagle;