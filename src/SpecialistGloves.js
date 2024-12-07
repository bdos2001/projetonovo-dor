import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const SpecialistGloves = () => {
    const [SpecialistGloves, setSpecialistGloves] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchSpecialistGloves = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const SpecialistGlovesSkins = data.filter((skin) => skin.weapon.name === "Specialist Gloves");
                setSpecialistGloves(SpecialistGlovesSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchSpecialistGloves();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {SpecialistGloves.map((SpecialistGloves)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${SpecialistGloves.rarity.color}60` }}>
                            <img src={SpecialistGloves.image}></img>
                            <p>{SpecialistGloves.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default SpecialistGloves;