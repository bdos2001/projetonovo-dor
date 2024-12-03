import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const Tec9 = () => {
    const [Tec9, setP250] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchP250 = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const P250Skins = data.filter((skin) => skin.weapon.name === "Tec-9");
                setP250(P250Skins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchP250();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {Tec9.map((Tec9)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${Tec9.rarity.color}60` }}>
                            <img src={Tec9.image}></img>
                            <p>{Tec9.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default Tec9;