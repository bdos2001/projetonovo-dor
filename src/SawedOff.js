import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const SawedOff = () => {
    const [SawedOff, setSawedOff] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchSawedOff = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const SawedOffSkins = data.filter((skin) => skin.weapon.name === "Sawed-Off");
                setSawedOff(SawedOffSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchSawedOff();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {SawedOff.map((SawedOff)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${SawedOff.rarity.color}60` }}>
                            <img src={SawedOff.image}></img>
                            <p>{SawedOff.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default SawedOff;