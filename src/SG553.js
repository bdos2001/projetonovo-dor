import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const SG553 = () => {
    const [SG553, setSG553] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchSG553 = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const SG553Skins = data.filter((skin) => skin.weapon.name === "SG 553");
                setSG553(SG553Skins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchSG553();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {SG553.map((SG553)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${SG553.rarity.color}60` }}>
                            <img src={SG553.image}></img>
                            <p>{SG553.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default SG553;