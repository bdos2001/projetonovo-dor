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
    const [ImagemUMP, setImagemUMP] = useState('');
    const [ImagemNegev, setImagemNegev] = useState('');
    const [ImagemM249, setImagemM249] = useState('');
    const [ImagemMAG7, setImagemMAG7] = useState('');
    const [ImagemNova, setImagemNova] = useState('');
    const [ImagemSawedOff, setImagemSawedOff] = useState('');
    const [ImagemXM1014, setImagemXM1014] = useState('');
    const [ImagemAK47, setImagemAK47] = useState('');
    const [ImagemM4A4, setImagemM4A4] = useState('');
    const [ImagemGalilAR, setImagemGalilAR] = useState('');
    const [ImagemM4A1S, setImagemM4A1S] = useState('');
    const [ImagemFAMAS, setImagemFAMAS] = useState('');
    const [ImagemAWP, setImagemAWP] = useState('');
    const [ImagemAUG, setImagemAUG] = useState('');
    const [ImagemSG553, setImagemSG553] = useState('');
    const [ImagemSSG08, setImagemSSG08] = useState('');
    const [ImagemSCAR20, setImagemSCAR20] = useState('');
    const [ImagemG3SG1, setImagemG3SG1] = useState('');
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
    const [UMP, setUMP] = useState([]);
    const [Negev, setNegev] = useState([]);
    const [M249, setM249] = useState([]);
    const [MAG7, setMAG7] = useState([]);
    const [Nova, setNova] = useState([]);
    const [SawedOff, setSawedOff] = useState([]);
    const [XM1014, setXM1014] = useState([]);
    const [AK47, setAK47] = useState([]);
    const [M4A4, setM4A4] = useState([]);
    const [GalilAR, setGalilAR] = useState([]);
    const [M4A1S, setM4A1S] = useState([]);
    const [FAMAS, setFAMAS] = useState([]);
    const [AWP, setAWP] = useState([]);
    const [AUG, setAUG] = useState([]);
    const [SG553, setSG553] = useState([]);
    const [SSG08, setSSG08] = useState([]);
    const [SCAR20, setSCAR20] = useState([]);
    const [G3SG1, setG3SG1] = useState([]);
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
                const UMP = data.filter((skin) => skin.weapon.name === "UMP-45");
                setUMP(UMP);
                const Negev = data.filter((skin) => skin.weapon.name === "Negev");
                setNegev(Negev);
                const M249 = data.filter((skin) => skin.weapon.name === "M249");
                setM249(M249);
                const MAG7 = data.filter((skin) => skin.weapon.name === "MAG-7");
                setMAG7(MAG7);
                const Nova = data.filter((skin) => skin.weapon.name === "Nova");
                setNova(Nova);
                const SawedOff = data.filter((skin) => skin.weapon.name === "Sawed-Off");
                setSawedOff(SawedOff);
                const XM1014 = data.filter((skin) => skin.weapon.name === "XM1014");
                setXM1014(XM1014);
                const AK47 = data.filter((skin) => skin.weapon.name === "AK-47");
                setAK47(AK47);
                const M4A4 = data.filter((skin) => skin.weapon.name === "M4A4");
                setM4A4(M4A4);
                const GalilAR = data.filter((skin) => skin.weapon.name === "Galil AR");
                setGalilAR(GalilAR);
                const M4A1S = data.filter((skin) => skin.weapon.name === "M4A1-S");
                setM4A1S(M4A1S);
                const FAMAS = data.filter((skin) => skin.weapon.name === "FAMAS");
                setFAMAS(FAMAS);
                const AWP = data.filter((skin) => skin.weapon.name === "AWP");
                setAWP(AWP);
                const AUG = data.filter((skin) => skin.weapon.name === "AUG");
                setAUG(AUG);
                const SG553 = data.filter((skin) => skin.weapon.name === "SG 553");
                setSG553(SG553);
                const SSG08 = data.filter((skin) => skin.weapon.name === "SSG 08");
                setSSG08(SSG08);
                const SCAR20 = data.filter((skin) => skin.weapon.name === "SCAR-20");
                setSCAR20(SCAR20);
                const G3SG1 = data.filter((skin) => skin.weapon.name === "G3SG1");
                setG3SG1(G3SG1);

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
                setImagemUMP(UMP[0].image);
                setImagemNegev(Negev[0].image);
                setImagemM249(M249[0].image);
                setImagemMAG7(MAG7[0].image);
                setImagemNova(Nova[0].image);
                setImagemSawedOff(SawedOff[0].image);
                setImagemXM1014(XM1014[0].image);
                setImagemAK47(AK47[0].image);
                setImagemM4A4(M4A4[0].image);
                setImagemGalilAR(GalilAR[0].image);
                setImagemM4A1S(M4A1S[0].image);
                setImagemFAMAS(FAMAS[0].image);
                setImagemAWP(AWP[0].image);
                setImagemAUG(AUG[0].image);
                setImagemSG553(SG553[0].image);
                setImagemSSG08(SSG08[0].image);
                setImagemSCAR20(SCAR20[0].image);
                setImagemG3SG1(G3SG1[0].image);

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
                        <div className="ItemDaGaleria" >
                            <img src={ImagemUMP} alt="Selected UMP" />
                            <select
                                onChange={(e) => {
                                    const selectedUMP = UMP.find(ump => ump.name === e.target.value);
                                    if (selectedUMP) {
                                        setImagemUMP(selectedUMP.image);
                                    }
                                }}
                            >
                                {UMP.map((ump) => (
                                    <option key={ump.name} value={ump.name}>
                                        {ump.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                </div>
                <h4>Heavy</h4>
                <div className="Galeria">
                        <div className="ItemDaGaleria">
                            <img src={ImagemNegev} alt="Selected Negev" />
                            <select
                                onChange={(e) => {
                                    const selectedNegev = Negev.find(negev => negev.name === e.target.value);
                                    if (selectedNegev) {
                                        setImagemNegev(selectedNegev.image);
                                    }
                                }}
                            >
                                {Negev.map((negev) => (
                                    <option key={negev.name} value={negev.name}>
                                        {negev.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="ItemDaGaleria">
                            <img src={ImagemM249} alt="Selected M249" />
                            <select
                                onChange={(e) => {
                                    const selectedM249 = M249.find(m249 => m249.name === e.target.value);
                                    if (selectedM249) {
                                        setImagemM249(selectedM249.image);
                                    }
                                }}
                            >
                                {M249.map((m249) => (
                                    <option key={m249.name} value={m249.name}>
                                        {m249.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="ItemDaGaleria">
                            <img src={ImagemMAG7} alt="Selected MAG-7" />
                            <select
                                onChange={(e) => {
                                    const selectedMAG7 = MAG7.find(mag7 => mag7.name === e.target.value);
                                    if (selectedMAG7) {
                                        setImagemMAG7(selectedMAG7.image);
                                    }
                                }}
                            >
                                {MAG7.map((mag7) => (
                                    <option key={mag7.name} value={mag7.name}>
                                        {mag7.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="ItemDaGaleria">
                            <img src={ImagemNova} alt="Selected Nova" />
                            <select
                                onChange={(e) => {
                                    const selectedNova = Nova.find(nova => nova.name === e.target.value);
                                    if (selectedNova) {
                                        setImagemNova(selectedNova.image);
                                    }
                                }}
                            >
                                {Nova.map((nova) => (
                                    <option key={nova.name} value={nova.name}>
                                        {nova.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="ItemDaGaleria">
                            <img src={ImagemSawedOff} alt="Selected Sawed-Off" />
                            <select
                                onChange={(e) => {
                                    const selectedSawedOff = SawedOff.find(sawedoff => sawedoff.name === e.target.value);
                                    if (selectedSawedOff) {
                                        setImagemSawedOff(selectedSawedOff.image);
                                    }
                                }}
                            >
                                {SawedOff.map((sawedoff) => (
                                    <option key={sawedoff.name} value={sawedoff.name}>
                                        {sawedoff.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="ItemDaGaleria">
                            <img src={ImagemXM1014} alt="Selected XM1014" />
                            <select
                                onChange={(e) => {
                                    const selectedXM1014 = XM1014.find(xm1014 => xm1014.name === e.target.value);
                                    if (selectedXM1014) {
                                        setImagemXM1014(selectedXM1014.image);
                                    }
                                }}
                            >
                                {XM1014.map((xm1014) => (
                                    <option key={xm1014.name} value={xm1014.name}>
                                        {xm1014.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                </div>
                <h4>Rifles</h4>
                <div className="Galeria">
                {isChecked && (
                        <div className="ItemDaGaleria">
                            <img src={ImagemAK47} alt="Selected AK-47" />
                            <select
                                onChange={(e) => {
                                    const selectedAK47 = AK47.find(ak47 => ak47.name === e.target.value);
                                    if (selectedAK47) {
                                        setImagemAK47(selectedAK47.image);
                                    }
                                }}
                            >
                                {AK47.map((ak47) => (
                                    <option key={ak47.name} value={ak47.name}>
                                        {ak47.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                    {!isChecked && (
                        <div className="ItemDaGaleria">
                            <img src={ImagemM4A4} alt="Selected M4A4" />
                            <select
                                onChange={(e) => {
                                    const selectedM4A4 = M4A4.find(m4a4 => m4a4.name === e.target.value);
                                    if (selectedM4A4) {
                                        setImagemM4A4(selectedM4A4.image);
                                    }
                                }}
                            >
                                {M4A4.map((m4a4) => (
                                    <option key={m4a4.name} value={m4a4.name}>
                                        {m4a4.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                    {isChecked && (
                        <div className="ItemDaGaleria">
                            <img src={ImagemGalilAR} alt="Selected Galil AR" />
                            <select
                                onChange={(e) => {
                                    const selectedGalilAR = GalilAR.find(galilar => galilar.name === e.target.value);
                                    if (selectedGalilAR) {
                                        setImagemGalilAR(selectedGalilAR.image);
                                    }
                                }}
                            >
                                {GalilAR.map((galilar) => (
                                    <option key={galilar.name} value={galilar.name}>
                                        {galilar.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                    {!isChecked && (
                        <div className="ItemDaGaleria">
                            <img src={ImagemM4A1S} alt="Selected M4A1-S" />
                            <select
                                onChange={(e) => {
                                    const selectedM4A1S = M4A1S.find(ma4a1s => ma4a1s.name === e.target.value);
                                    if (selectedM4A1S) {
                                        setImagemM4A1S(selectedM4A1S.image);
                                    }
                                }}
                            >
                                {M4A1S.map((ma4a1s) => (
                                    <option key={ma4a1s.name} value={ma4a1s.name}>
                                        {ma4a1s.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                    {!isChecked && (
                        <div className="ItemDaGaleria">
                            <img src={ImagemFAMAS} alt="Selected FAMAS" />
                            <select
                                onChange={(e) => {
                                    const selectedFAMAS = FAMAS.find(famas => famas.name === e.target.value);
                                    if (selectedFAMAS) {
                                        setImagemFAMAS(selectedFAMAS.image);
                                    }
                                }}
                            >
                                {FAMAS.map((famas) => (
                                    <option key={famas.name} value={famas.name}>
                                        {famas.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                    <div className="ItemDaGaleria" >
                        <img src={ImagemAWP} alt="Selected AWP" />
                        <select
                            onChange={(e) => {
                                const selectedAWP = AWP.find(awp => awp.name === e.target.value);
                                if (selectedAWP) {
                                    setImagemAWP(selectedAWP.image);
                                }
                            }}
                        >
                            {AWP.map((awp) => (
                                <option key={awp.name} value={awp.name}>
                                    {awp.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    {!isChecked && (
                        <div className="ItemDaGaleria">
                            <img src={ImagemAUG} alt="Selected AUG" />
                            <select
                                onChange={(e) => {
                                    const selectedAUG = AUG.find(aug => aug.name === e.target.value);
                                    if (selectedAUG) {
                                        setImagemAUG(selectedAUG.image);
                                    }
                                }}
                            >
                                {AUG.map((aug) => (
                                    <option key={aug.name} value={aug.name}>
                                        {aug.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                    {isChecked && (
                        <div className="ItemDaGaleria">
                            <img src={ImagemSG553} alt="Selected SG 553" />
                            <select
                                onChange={(e) => {
                                    const selectedSG553 = SG553.find(sg553 => sg553.name === e.target.value);
                                    if (selectedSG553) {
                                        setImagemSG553(selectedSG553.image);
                                    }
                                }}
                            >
                                {SG553.map((sg553) => (
                                    <option key={sg553.name} value={sg553.name}>
                                        {sg553.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                    <div className="ItemDaGaleria" >
                        <img src={ImagemSSG08} alt="Selected SSG 08" />
                        <select
                            onChange={(e) => {
                                const selectedSSG08 = SSG08.find(ssg08 => ssg08.name === e.target.value);
                                if (selectedSSG08) {
                                    setImagemSSG08(selectedSSG08.image);
                                }
                            }}
                        >
                            {SSG08.map((ssg08) => (
                                <option key={ssg08.name} value={ssg08.name}>
                                    {ssg08.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    {!isChecked && (
                        <div className="ItemDaGaleria">
                            <img src={ImagemSCAR20} alt="Selected SCAR-20" />
                            <select
                                onChange={(e) => {
                                    const selectedSCAR20 = SCAR20.find(scar20 => scar20.name === e.target.value);
                                    if (selectedSCAR20) {
                                        setImagemSCAR20(selectedSCAR20.image);
                                    }
                                }}
                            >
                                {SCAR20.map((scar20) => (
                                    <option key={scar20.name} value={scar20.name}>
                                        {scar20.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                    {isChecked && (
                        <div className="ItemDaGaleria">
                            <img src={ImagemG3SG1} alt="Selected G3SG1" />
                            <select
                                onChange={(e) => {
                                    const selectedG3SG1 = G3SG1.find(g3sg1 => g3sg1.name === e.target.value);
                                    if (selectedG3SG1) {
                                        setImagemG3SG1(selectedG3SG1.image);
                                    }
                                }}
                            >
                                {G3SG1.map((g3sg1) => (
                                    <option key={g3sg1.name} value={g3sg1.name}>
                                        {g3sg1.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                </div> 
            </body>
        </>

    );
};

export default MyLoadout;
