import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";



const SMGs = () => {
    const [SMGs, setSMGs] = useState([])
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchSMGs = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const SMGsSkins = data.filter((skin) => skin.category.name === "SMGs");
                setSMGs(SMGsSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchSMGs();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }

    return (
        <>
            <h1>SMGs</h1>
            <div className="Galeria">

                {(() => {
                    const MP7Imgs = [];
                    SMGs.forEach((SMGs) => {
                        if (SMGs.weapon.name === "MP7") {
                            MP7Imgs.push(SMGs.image);
                        }
                    });
                    const randomIndex1 = Math.floor(Math.random() * MP7Imgs.length);

                    return (
                        <>
                            <div className="ItemDaGaleria">
                                <Link to="MP7"><img src={MP7Imgs[randomIndex1]} alt="MP7" /><p>MP7</p></Link> { }
                            </div>
                        </>
                    );

                    return null;
                })()}
            </div>
        </>

    );
}
export default SMGs;