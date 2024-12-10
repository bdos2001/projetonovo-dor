import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const MyLoadout = () => {
    const [Loading, setLoading] = useState(true);
    const [ImagemGlock, setImagemGlock] = useState('');
    const [ImagemUSPs, setImagemUSPs] = useState('');
    const [Glock, setGlock] = useState([]);
    const [USPs, setUSPs] = useState([]);

    useEffect(() => {
        const fetchMyLoadout = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;

                // Filtra as skins
                const Glock18 = data.filter((skin) => skin.weapon.name === "Glock-18");
                setGlock(Glock18);
                const USPs = data.filter((skin) => skin.weapon.name === "USP-S");
                setUSPs(USPs);

                // Define a Imagem
                setImagemGlock(Glock18[0].image);
                setImagemUSPs(USPs[0].image);


                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };

        fetchMyLoadout();
    }, []);

    if (Loading) {
        return <div>A carregar...</div>;
    }

    return (
        <>
            <body className="corpo">
                <div className="containerToggle">
                    <input id="check" name="check" type="checkbox" />
                    <label className="toggle" htmlFor="check">
                        <div className="toggle__circle"></div>
                    </label>
                </div>

                <div className="Galeria">
                    <div className="ItemDaGaleria">
                        <img src={ImagemGlock} alt="Selected Glock" />
                        <select
                            onChange={(e) => {
                                const selectedGlock = Glock.find(glock => glock.name === e.target.value);
                                if (selectedGlock) {
                                    setImagemGlock(selectedGlock.image);
                                }
                            }}
                        >
                            {Glock.map((glock18) => (
                                <option key={glock18.name} value={glock18.name}>
                                    {glock18.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="ItemDaGaleria" >
                        <img src={ImagemUSPs} alt="Selected USP-S" />
                        <select
                            onChange={(e) => {
                                const selectedUSPs = USPs.find(usps => usps.name === e.target.value);
                                if (selectedUSPs) {
                                    setImagemUSPs(selectedUSPs.image);
                                }
                            }}
                        >
                            {USPs.map((usps) => (
                                <option key={usps.name} value={usps.name}>
                                    {usps.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </body>
        </>
    );
};

export default MyLoadout;
