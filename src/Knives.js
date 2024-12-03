import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";



const Knives = () => {
    const [Knives, setKnives] = useState([])
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchKnives = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const KnivesSkins = data.filter((skin) => skin.category.name === "Knives");
                setKnives(KnivesSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchKnives();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }

    return (
        <>
            <h1>Knives</h1>
            <div className="Galeria">

                {(() => {
                    const KarambitImgs = [];
                    Knives.forEach((Knives) => {
                        if (Knives.weapon.name === "Karambit") {
                            KarambitImgs.push(Knives.image);
                        }
                    });
                    const randomIndex1 = Math.floor(Math.random() * KarambitImgs.length);

                    return (
                        <>
                            <div className="ItemDaGaleria">
                                <Link to="Karambit"><img src={KarambitImgs[randomIndex1]} alt="Karambit" /><p>Karambit</p></Link> { }
                            </div>
                        </>
                    );

                    return null;
                })()}
            </div>
        </>

    );
}
export default Knives;