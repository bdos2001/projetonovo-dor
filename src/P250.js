import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const P250 = () => {
    const [P250, setP250] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchP250 = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const P250Skins = data.filter((skin) => skin.weapon.name === "P250");
                setP250(P250Skins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchP250();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {P250.map((P250)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${P250.rarity.color}60` }}>
                            <img src={P250.image}></img>
                            <p>{P250.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default P250;