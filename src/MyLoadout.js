import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";



const MyLoadout = () => {
    const [MyLoadout, setMyLoadout] = useState([])
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchMyLoadout = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const MyLoadoutSkins = data.filter((skin) => skin);
                setMyLoadout(MyLoadoutSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchMyLoadout();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }

    return (
        <>
            <h1>My Loadout</h1>
            <div className="Galeria">

                {(() => {
                    const Glock = [];
                    MyLoadout.forEach((MyLoadout) => {
                        if (MyLoadout.weapon.name === "Glock-18") {
                            Glock.push(MyLoadout);
                        }
                    });

                    return (
                        <>
                            <div className="ItemDaGaleria">
                                <img src={Glock[0].image}></img>
                                <select>
                                    {Glock.map((glock18) => (
                                        <>  
                                            <option value={glock18.name} id="glock" >{glock18.name}</option>
                                        </>
                                    ))
                                    }
                                </select>
                            </div>
                        </>
                    );

                    return null;
                })()}
            </div>
        </>

    );
}
export default MyLoadout;