import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const NomadKnife = () => {
    const [NomadKnife, setNomadKnife] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchNomadKnife = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const NomadKnifeSkins = data.filter((skin) => skin.weapon.name === "Nomad Knife");
                setNomadKnife(NomadKnifeSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchNomadKnife();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {NomadKnife.map((NomadKnife)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${NomadKnife.rarity.color}60` }}>
                            <img src={NomadKnife.image}></img>
                            <p>{NomadKnife.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default NomadKnife;