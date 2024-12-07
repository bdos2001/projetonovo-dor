import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const StilettoKnife = () => {
    const [StilettoKnife, setStilettoKnife] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchStilettoKnife = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const StilettoKnifeSkins = data.filter((skin) => skin.weapon.name === "Stiletto Knife");
                setStilettoKnife(StilettoKnifeSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchStilettoKnife();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {StilettoKnife.map((StilettoKnife)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${StilettoKnife.rarity.color}60` }}>
                            <img src={StilettoKnife.image}></img>
                            <p>{StilettoKnife.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default StilettoKnife;