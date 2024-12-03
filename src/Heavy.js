import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";



const Heavy = () => {
    const [Heavy, setHeavy] = useState([])
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchHeavy = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const HeavySkins = data.filter((skin) => skin.category.name === "Heavy");
                setHeavy(HeavySkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchHeavy();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }

    return (
        <>
            <h1>Heavy</h1>
            <div className="Galeria">

                {(() => {
                    const NegevImgs = [];
                    Heavy.forEach((Heavy) => {
                        if (Heavy.weapon.name === "Negev") {
                            NegevImgs.push(Heavy.image);
                        }
                    });
                    const randomIndex1 = Math.floor(Math.random() * NegevImgs.length);

                    return (
                        <>
                            <div className="ItemDaGaleria">
                                <Link to="Negev"><img src={NegevImgs[randomIndex1]} alt="Negev" /><p>Negev</p></Link> { }
                            </div>
                        </>
                    );

                    return null;
                })()}
            </div>
        </>

    );
}
export default Heavy;