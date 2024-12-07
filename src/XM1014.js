import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const XM1014 = () => {
    const [XM1014, setXM1014] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchXM1014 = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const XM1014Skins = data.filter((skin) => skin.weapon.name === "XM1014");
                setXM1014(XM1014Skins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchXM1014();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {XM1014.map((XM1014)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${XM1014.rarity.color}60` }}>
                            <img src={XM1014.image}></img>
                            <p>{XM1014.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default XM1014;