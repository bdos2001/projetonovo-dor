import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const Negev = () => {
    const [Negev, setNegev] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchNegev = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const NegevSkins = data.filter((skin) => skin.weapon.name === "Negev");
                setNegev(NegevSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchNegev();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {Negev.map((Negev)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${Negev.rarity.color}60` }}>
                            <img src={Negev.image}></img>
                            <p>{Negev.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default Negev;