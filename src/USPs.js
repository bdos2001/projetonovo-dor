import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const USPs = () => {
    const [USPs, setUSPs] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchUSPs = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const USPsSkins = data.filter((skin) => skin.weapon.name === "USP-S");
                setUSPs(USPsSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchUSPs();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {USPs.map((USPs)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${USPs.rarity.color}60` }}>
                            <img src={USPs.image}></img>
                            <p>{USPs.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default USPs;