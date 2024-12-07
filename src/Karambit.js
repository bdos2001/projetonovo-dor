import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const Karambit = () => {
    const [Karambit, setSawedOff] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchSawedOff = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const SawedOffSkins = data.filter((skin) => skin.weapon.name === "Karambit");
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
                {Karambit.map((Karambit)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${Karambit.rarity.color}60` }}>
                            <img src={Karambit.image}></img>
                            <p>{Karambit.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default Karambit;