import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const R8Revolver = () => {
    const [R8Revolver, setR8Revolver] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchR8Revolver = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const R8RevolverSkins = data.filter((skin) => skin.weapon.name === "R8 Revolver");
                setR8Revolver(R8RevolverSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchR8Revolver();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {R8Revolver.map((R8Revolver)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${R8Revolver.rarity.color}60` }}>
                            <img src={R8Revolver.image}></img>
                            <p>{R8Revolver.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default R8Revolver;