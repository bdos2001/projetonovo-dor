import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const Pistols = () => {
    const [Pistols, setPistols] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchPistols = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const PistolSkins = data.filter((skin) => skin.category.name === "Pistols");
                setPistols(PistolSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchPistols();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
        <div class="container">
            <h1>Pistols</h1>
            <ul>
                {Pistols.map((pistol)=>(
                    <li key={pistol.id}>
                        <img src={pistol.image} width="500" height="600"></img>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Pistols;