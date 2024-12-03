import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const CZ75Auto = () => {
    const [CZ75Auto, setCZ75Auto] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchCZ75Auto = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const CZ75AutoSkins = data.filter((skin) => skin.weapon.name === "CZ75-Auto");
                setCZ75Auto(CZ75AutoSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchCZ75Auto();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {CZ75Auto.map((CZ75Auto)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${CZ75Auto.rarity.color}60` }}>
                            <img src={CZ75Auto.image}></img>
                            <p>{CZ75Auto.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default CZ75Auto;