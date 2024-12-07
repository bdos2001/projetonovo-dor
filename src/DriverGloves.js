import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const DriverGloves = () => {
    const [DriverGloves, setDriverGloves] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchDriverGloves = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const DriverGlovesSkins = data.filter((skin) => skin.weapon.name === "Driver Gloves");
                setDriverGloves(DriverGlovesSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchDriverGloves();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {DriverGloves.map((DriverGloves)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${DriverGloves.rarity.color}60` }}>
                            <img src={DriverGloves.image}></img>
                            <p>{DriverGloves.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default DriverGloves;