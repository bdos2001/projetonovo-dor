import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const NavajaKnife = () => {
    const [NavajaKnife, setNavajaKnife] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchNavajaKnife = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const NavajaKnifeSkins = data.filter((skin) => skin.weapon.name === "Navaja Knife");
                setNavajaKnife(NavajaKnifeSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchNavajaKnife();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {NavajaKnife.map((NavajaKnife)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${NavajaKnife.rarity.color}60` }}>
                            <img src={NavajaKnife.image}></img>
                            <p>{NavajaKnife.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default NavajaKnife;