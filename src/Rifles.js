import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";



const Rifles = () => {
    const [Rifles, setRifles] = useState([])
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchRifles = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const RiflesSkins = data.filter((skin) => skin.category.name === "Rifles");
                setRifles(RiflesSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchRifles();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }

    return (
        <>
            <h1>Rifles</h1>
            <div className="Galeria">

                {(() => {
                    const Ak47Imgs = [];
                    Rifles.forEach((Rifles) => {
                        if (Rifles.weapon.name === "AK-47") {
                            Ak47Imgs.push(Rifles.image);
                        }
                    });
                    const randomIndex1 = Math.floor(Math.random() * Ak47Imgs.length);

                    return (
                        <>
                            <div className="ItemDaGaleria">
                                <Link to="Ak47"><img src={Ak47Imgs[randomIndex1]} alt="Ak47" /><p>Ak-47</p></Link> { }
                            </div>
                        </>
                    );

                    return null;
                })()}
            </div>
        </>

    );
}
export default Rifles;