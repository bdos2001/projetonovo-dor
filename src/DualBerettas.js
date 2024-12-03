import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const DualBerettas = () => {
    const [DualBerettas, setDualBerettas] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchDualBerettas = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const DualBerettasSkins = data.filter((skin) => skin.weapon.name === "Dual Berettas");
                setDualBerettas(DualBerettasSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchDualBerettas();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {DualBerettas.map((DualBerettas)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${DualBerettas.rarity.color}60` }}>
                            <img src={DualBerettas.image}></img>
                            <p>{DualBerettas.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default DualBerettas;