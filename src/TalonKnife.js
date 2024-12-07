import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const TalonKnife = () => {
    const [TalonKnife, setTalonKnife] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchTalonKnife = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const TalonKnifeSkins = data.filter((skin) => skin.weapon.name === "Talon Knife");
                setTalonKnife(TalonKnifeSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchTalonKnife();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {TalonKnife.map((TalonKnife)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${TalonKnife.rarity.color}60` }}>
                            <img src={TalonKnife.image}></img>
                            <p>{TalonKnife.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default TalonKnife;