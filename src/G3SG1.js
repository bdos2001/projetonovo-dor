import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const G3SG1 = () => {
    const [G3SG1, setG3SG1] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchG3SG1 = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const G3SG1Skins = data.filter((skin) => skin.weapon.name === "G3SG1");
                setG3SG1(G3SG1Skins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchG3SG1();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {G3SG1.map((G3SG1)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${G3SG1.rarity.color}60` }}>
                            <img src={G3SG1.image}></img>
                            <p>{G3SG1.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default G3SG1;