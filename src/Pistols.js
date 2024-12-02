import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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

    /*if (pistols.weapon.name === "Glock-18"){
        glockImgs.push(pistols.image)
    }*/

    return (
        <>
            <h1>Pistols</h1>
            <div className="Galeria">

                {(() => {
                    const glockImgs = []; 
                    Pistols.forEach((pistols) => {
                        if (pistols.weapon.name === "Glock-18") {
                            glockImgs.push(pistols.image);
                        }
                    });
                    const randomIndex1 = Math.floor(Math.random() * glockImgs.length);

                    return (
                        <div className="ItemDaGaleria">
                            <Link to="Glock18"><img src={glockImgs[randomIndex1]} alt="Glock-18" /><p>Glock-18</p></Link> { }
                        </div>
                    );

                    return null;
                })()}
            </div>
        </>

    );
}
export default Pistols;