import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const MyLoadout = () => {
    const [Loading, setLoading] = useState(true);
    const [ImagemGlock, setImagemGlock] = useState('');
    const [ImagemUSPs, setImagemUSPs] = useState('');
    const [ImagemP2000, setImagemP2000] = useState('');
    const [ImagemP250, setImagemP250] = useState('');
    const [ImagemDualBerettas, setImagemDualBerettas] = useState('');
    const [ImagemCZ75Auto, setImagemCZ75Auto] = useState('');
    const [ImagemTec9, setImagemTec9] = useState('');
    const [ImagemFiveSeveN, setImagemFiveSeveN] = useState('');
    const [ImagemDesertEagle, setImagemDesertEagle] = useState('');
    const [ImagemR8Revolver, setImagemR8Revolver] = useState('');
    const [ImagemMAC10, setImagemMAC10] = useState('');
    const [ImagemMP9, setImagemMP9] = useState('');
    const [ImagemMP7, setImagemMP7] = useState('');
    const [ImagemPPBizon, setImagemPPBizon] = useState('');
    const [ImagemP90, setImagemP90] = useState('');
    const [Glock, setGlock] = useState([]);
    const [USPs, setUSPs] = useState([]);
    const [P2000, setP2000] = useState([]);
    const [P250, setP250] = useState([]);
    const [DualBerettas, setDualBerettas] = useState([]);
    const [CZ75Auto, setCZ75Auto] = useState([]);
    const [Tec9, setTec9] = useState([]);
    const [FiveSeveN, setFiveSeveN] = useState([]);
    const [DesertEagle, setDesertEagle] = useState([]);
    const [R8Revolver, setR8Revolver] = useState([]);
    const [MAC10, setMAC10] = useState([]);
    const [MP9, setMP9] = useState([]);
    const [MP7, setMP7] = useState([]);
    const [PPBizon, setPPBizon] = useState([]);
    const [P90, setP90] = useState([]);
    const [isChecked, setIsChecked] = useState(false);

    const handleToggleChange = () => {
        setIsChecked(!isChecked);
    };

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
                const P2000 = data.filter((skin) => skin.weapon.name === "P2000");
                setP2000(P2000);
                const P250 = data.filter((skin) => skin.weapon.name === "P250");
                setP250(P250);
                const DualBerettas = data.filter((skin) => skin.weapon.name === "Dual Berettas");
                setDualBerettas(DualBerettas);
                const CZ75Auto = data.filter((skin) => skin.weapon.name === "CZ75-Auto");
                setCZ75Auto(CZ75Auto);
                const Tec9 = data.filter((skin) => skin.weapon.name === "Tec-9");
                setTec9(Tec9);
                const FiveSeveN = data.filter((skin) => skin.weapon.name === "Five-SeveN");
                setFiveSeveN(FiveSeveN);
                const DesertEagle = data.filter((skin) => skin.weapon.name === "Desert Eagle");
                setDesertEagle(DesertEagle);
                const R8Revolver = data.filter((skin) => skin.weapon.name === "R8 Revolver");
                setR8Revolver(R8Revolver);
                const MAC10 = data.filter((skin) => skin.weapon.name === "MAC-10");
                setMAC10(MAC10);
                const MP9 = data.filter((skin) => skin.weapon.name === "MP9");
                setMP9(MP9);
                const MP7 = data.filter((skin) => skin.weapon.name === "MP7");
                setMP7(MP7);
                const PPBizon = data.filter((skin) => skin.weapon.name === "PP-Bizon");
                setPPBizon(PPBizon);
                const P90 = data.filter((skin) => skin.weapon.name === "P90");
                setP90(P90);

                // Define a Imagem
                setImagemGlock(Glock18[0].image);
                setImagemUSPs(USPs[0].image);
                setImagemP2000(P2000[0].image);
                setImagemP250(P250[0].image);
                setImagemDualBerettas(DualBerettas[0].image);
                setImagemCZ75Auto(CZ75Auto[0].image);
                setImagemTec9(Tec9[0].image);
                setImagemFiveSeveN(FiveSeveN[0].image);
                setImagemDesertEagle(DesertEagle[0].image);
                setImagemR8Revolver(R8Revolver[0].image);
                setImagemMAC10(MAC10[0].image);
                setImagemMP9(MP9[0].image);
                setImagemMP7(MP7[0].image);
                setImagemPPBizon(PPBizon[0].image);
                setImagemP90(P90[0].image);

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
                    <input id="check" name="check" type="checkbox" checked={isChecked} onChange={handleToggleChange} />
                    <label className="toggle" htmlFor="check">
                        <div className="toggle__circle"></div>
                    </label>
                </div>
                <h4>Pistols</h4>
                <div className="Galeria">
                    {isChecked && (
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
                    )}
                    {!isChecked && (
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
                    )}
                    {!isChecked && (
                        <div className="ItemDaGaleria" >
                            <img src={ImagemP2000} alt="Selected P2000" />
                            <select
                                onChange={(e) => {
                                    const selectedP2000 = P2000.find(p2000 => p2000.name === e.target.value);
                                    if (selectedP2000) {
                                        setImagemP2000(selectedP2000.image);
                                    }
                                }}
                            >
                                {P2000.map((p2000) => (
                                    <option key={p2000.name} value={p2000.name}>
                                        {p2000.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                    <div className="ItemDaGaleria" >
                        <img src={ImagemP250} alt="Selected P250" />
                        <select
                            onChange={(e) => {
                                const selectedP250 = P250.find(p250 => p250.name === e.target.value);
                                if (selectedP250) {
                                    setImagemP250(selectedP250.image);
                                }
                            }}
                        >
                            {P250.map((p250) => (
                                <option key={p250.name} value={p250.name}>
                                    {p250.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="ItemDaGaleria" >
                        <img src={ImagemDualBerettas} alt="Selected Dual Berettas" />
                        <select
                            onChange={(e) => {
                                const selectedDualBerettas = DualBerettas.find(dualberettas => dualberettas.name === e.target.value);
                                if (selectedDualBerettas) {
                                    setImagemDualBerettas(selectedDualBerettas.image);
                                }
                            }}
                        >
                            {DualBerettas.map((dualberettas) => (
                                <option key={dualberettas.name} value={dualberettas.name}>
                                    {dualberettas.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    {!isChecked && (
                        <div className="ItemDaGaleria" >
                            <img src={ImagemCZ75Auto} alt="Selected CZ75-Auto" />
                            <select
                                onChange={(e) => {
                                    const selectedCZ75Auto = CZ75Auto.find(cz75auto => cz75auto.name === e.target.value);
                                    if (selectedCZ75Auto) {
                                        setImagemCZ75Auto(selectedCZ75Auto.image);
                                    }
                                }}
                            >
                                {CZ75Auto.map((cz75auto) => (
                                    <option key={cz75auto.name} value={cz75auto.name}>
                                        {cz75auto.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                    {isChecked && (
                        <div className="ItemDaGaleria">
                            <img src={ImagemTec9} alt="Selected Tec-9" />
                            <select
                                onChange={(e) => {
                                    const selectedTec9 = Tec9.find(tec9 => tec9.name === e.target.value);
                                    if (selectedTec9) {
                                        setImagemTec9(selectedTec9.image);
                                    }
                                }}
                            >
                                {Tec9.map((tec9) => (
                                    <option key={tec9.name} value={tec9.name}>
                                        {tec9.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                    {!isChecked && (
                        <div className="ItemDaGaleria" >
                            <img src={ImagemFiveSeveN} alt="Selected Five-SeveN" />
                            <select
                                onChange={(e) => {
                                    const selectedFiveSeveN = FiveSeveN.find(fiveseven => fiveseven.name === e.target.value);
                                    if (selectedFiveSeveN) {
                                        setImagemFiveSeveN(selectedFiveSeveN.image);
                                    }
                                }}
                            >
                                {FiveSeveN.map((fiveseven) => (
                                    <option key={fiveseven.name} value={fiveseven.name}>
                                        {fiveseven.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                    <div className="ItemDaGaleria" >
                        <img src={ImagemDesertEagle} alt="Selected Deserte Eagle" />
                        <select
                            onChange={(e) => {
                                const selectedDesertEagle = DesertEagle.find(deserteagle => deserteagle.name === e.target.value);
                                if (selectedDesertEagle) {
                                    setImagemDesertEagle(selectedDesertEagle.image);
                                }
                            }}
                        >
                            {DesertEagle.map((deserteagle) => (
                                <option key={deserteagle.name} value={deserteagle.name}>
                                    {deserteagle.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="ItemDaGaleria" >
                        <img src={ImagemR8Revolver} alt="Selected R8 Revolver" />
                        <select
                            onChange={(e) => {
                                const selectedR8Revolver = R8Revolver.find(r8revolver => r8revolver.name === e.target.value);
                                if (selectedR8Revolver) {
                                    setImagemR8Revolver(selectedR8Revolver.image);
                                }
                            }}
                        >
                            {R8Revolver.map((r8revolver) => (
                                <option key={r8revolver.name} value={r8revolver.name}>
                                    {r8revolver.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <h4>SMGs</h4>
                <div className="Galeria">
                    {isChecked && (
                        <div className="ItemDaGaleria">
                            <img src={ImagemMAC10} alt="Selected MAC-10" />
                            <select
                                onChange={(e) => {
                                    const selectedMAC10 = MAC10.find(mac10 => mac10.name === e.target.value);
                                    if (selectedMAC10) {
                                        setImagemMAC10(selectedMAC10.image);
                                    }
                                }}
                            >
                                {MAC10.map((mac10) => (
                                    <option key={mac10.name} value={mac10.name}>
                                        {mac10.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                    {!isChecked && (
                        <div className="ItemDaGaleria">
                            <img src={ImagemMP9} alt="Selected MAC-10" />
                            <select
                                onChange={(e) => {
                                    const selectedMP9 = MP9.find(mp9 => mp9.name === e.target.value);
                                    if (selectedMP9) {
                                        setImagemMP9(selectedMP9.image);
                                    }
                                }}
                            >
                                {MP9.map((mp9) => (
                                    <option key={mp9.name} value={mp9.name}>
                                        {mp9.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                    <div className="ItemDaGaleria" >
                        <img src={ImagemMP7} alt="Selected MP7" />
                        <select
                            onChange={(e) => {
                                const selectedMP7 = MP7.find(mp7 => mp7.name === e.target.value);
                                if (selectedMP7) {
                                    setImagemMP7(selectedMP7.image);
                                }
                            }}
                        >
                            {MP7.map((mp7) => (
                                <option key={mp7.name} value={mp7.name}>
                                    {mp7.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="ItemDaGaleria" >
                            <img src={ImagemPPBizon} alt="Selected PP-Bizon" />
                            <select
                                onChange={(e) => {
                                    const selectedPPBizon = PPBizon.find(ppbizon => ppbizon.name === e.target.value);
                                    if (selectedPPBizon) {
                                        setImagemPPBizon(selectedPPBizon.image);
                                    }
                                }}
                            >
                                {PPBizon.map((ppbizon) => (
                                    <option key={ppbizon.name} value={ppbizon.name}>
                                        {ppbizon.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="ItemDaGaleria" >
                            <img src={ImagemP90} alt="Selected P90" />
                            <select
                                onChange={(e) => {
                                    const selectedP90 = P90.find(p90 => p90.name === e.target.value);
                                    if (selectedP90) {
                                        setImagemP90(selectedP90.image);
                                    }
                                }}
                            >
                                {P90.map((p90) => (
                                    <option key={p90.name} value={p90.name}>
                                        {p90.name}
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
