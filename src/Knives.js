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
                    const BayonetImgs = [];
                    const UrsusKnifeImgs = [];
                    const BowieKnifeImgs = [];
                    const TalonKnifeImgs = [];
                    const ButterflyKnifeImgs = [];
                    const SurvivalKnifeImgs = [];
                    const ClassicKnifeImgs = [];
                    const StilettoKnifeImgs = [];
                    const FalchionKnifeImgs = [];
                    const SkeletonKnifeImgs = [];
                    const FlipKnifeImgs = [];
                    const ShadowDaggersImgs = [];
                    const GutKnifeImgs = [];
                    const ParacordKnifeImgs = [];
                    const HuntsmanKnifeImgs = [];
                    const NomadKnifeImgs = [];
                    const KukriKnifeImgs = [];
                    const NavajaKnifeImgs = [];
                    const M9BayonetImgs = [];

                    Knives.forEach((Knives) => {
                        if (Knives.weapon.name === "Karambit") {
                            KarambitImgs.push(Knives.image);
                        }
                        if (Knives.weapon.name === "Bayonet") {
                            BayonetImgs.push(Knives.image);
                        }
                        if (Knives.weapon.name === "Ursus Knife") {
                            UrsusKnifeImgs.push(Knives.image);
                        }
                        if (Knives.weapon.name === "Bowie Knife") {
                            BowieKnifeImgs.push(Knives.image);
                        }
                        if (Knives.weapon.name === "Talon Knife") {
                            TalonKnifeImgs.push(Knives.image);
                        }
                        if (Knives.weapon.name === "Butterfly Knife") {
                            ButterflyKnifeImgs.push(Knives.image);
                        }
                        if (Knives.weapon.name === "Survival Knife") {
                            SurvivalKnifeImgs.push(Knives.image);
                        }
                        if (Knives.weapon.name === "Classic Knife") {
                            ClassicKnifeImgs.push(Knives.image);
                        }
                        if (Knives.weapon.name === "Stiletto Knife") {
                            StilettoKnifeImgs.push(Knives.image);
                        }
                        if (Knives.weapon.name === "Falchion Knife") {
                            FalchionKnifeImgs.push(Knives.image);
                        }
                        if (Knives.weapon.name === "Skeleton Knife") {
                            SkeletonKnifeImgs.push(Knives.image);
                        }
                        if (Knives.weapon.name === "Flip Knife") {
                            FlipKnifeImgs.push(Knives.image);
                        }
                        if (Knives.weapon.name === "Shadow Daggers") {
                            ShadowDaggersImgs.push(Knives.image);
                        }
                        if (Knives.weapon.name === "Gut Knife") {
                            GutKnifeImgs.push(Knives.image);
                        }
                        if (Knives.weapon.name === "Paracord Knife") {
                            ParacordKnifeImgs.push(Knives.image);
                        }
                        if (Knives.weapon.name === "Huntsman Knife") {
                            HuntsmanKnifeImgs.push(Knives.image);
                        }
                        if (Knives.weapon.name === "Nomad Knife") {
                            NomadKnifeImgs.push(Knives.image);
                        }
                        if (Knives.weapon.name === "Kukri Knife") {
                            KukriKnifeImgs.push(Knives.image);
                        }
                        if (Knives.weapon.name === "Navaja Knife") {
                            NavajaKnifeImgs.push(Knives.image);
                        }
                        if (Knives.weapon.name === "M9 Bayonet") {
                            M9BayonetImgs.push(Knives.image);
                        }
                    });
                    const randomIndex1 = Math.floor(Math.random() * KarambitImgs.length);
                    const randomIndex2 = Math.floor(Math.random() * BayonetImgs.length);
                    const randomIndex3 = Math.floor(Math.random() * UrsusKnifeImgs.length);
                    const randomIndex4 = Math.floor(Math.random() * BowieKnifeImgs.length);
                    const randomIndex5 = Math.floor(Math.random() * TalonKnifeImgs.length);
                    const randomIndex6 = Math.floor(Math.random() * ButterflyKnifeImgs.length);
                    const randomIndex7 = Math.floor(Math.random() * SurvivalKnifeImgs.length);
                    const randomIndex8 = Math.floor(Math.random() * ClassicKnifeImgs.length);
                    const randomIndex9 = Math.floor(Math.random() * StilettoKnifeImgs.length);
                    const randomIndex10 = Math.floor(Math.random() * FalchionKnifeImgs.length);
                    const randomIndex11 = Math.floor(Math.random() * SkeletonKnifeImgs.length);
                    const randomIndex12 = Math.floor(Math.random() * FlipKnifeImgs.length);
                    const randomIndex13 = Math.floor(Math.random() * ShadowDaggersImgs.length);
                    const randomIndex14 = Math.floor(Math.random() * GutKnifeImgs.length);
                    const randomIndex15 = Math.floor(Math.random() * ParacordKnifeImgs.length);
                    const randomIndex16 = Math.floor(Math.random() * HuntsmanKnifeImgs.length);
                    const randomIndex17 = Math.floor(Math.random() * NomadKnifeImgs.length);
                    const randomIndex18 = Math.floor(Math.random() * KukriKnifeImgs.length);
                    const randomIndex19 = Math.floor(Math.random() * NavajaKnifeImgs.length);
                    const randomIndex20 = Math.floor(Math.random() * M9BayonetImgs.length);

                    return (
                        <>
                            <div className="ItemDaGaleria">
                                <Link to="Karambit"><img src={KarambitImgs[randomIndex1]} alt="Karambit" /><p>Karambit</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="Bayonet"><img src={BayonetImgs[randomIndex2]} alt="Bayonet" /><p>Bayonet</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="UrsusKnife"><img src={UrsusKnifeImgs[randomIndex3]} alt="UrsusKnife" /><p>Ursus Knife</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="BowieKnife"><img src={BowieKnifeImgs[randomIndex4]} alt="BowieKnife" /><p>Bowie Knife</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="TalonKnife"><img src={TalonKnifeImgs[randomIndex5]} alt="TalonKnife" /><p>Talon Knife</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="ButterflyKnife"><img src={ButterflyKnifeImgs[randomIndex6]} alt="ButterflyKnife" /><p>Butterfly Knife</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="SurvivalKnife"><img src={SurvivalKnifeImgs[randomIndex7]} alt="SurvivalKnife" /><p>Survival Knife</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="ClassicKnife"><img src={ClassicKnifeImgs[randomIndex8]} alt="ClassicKnife" /><p>Classic Knife</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="StilettoKnife"><img src={StilettoKnifeImgs[randomIndex9]} alt="StilettoKnife" /><p>Stiletto Knife</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="FalchionKnife"><img src={FalchionKnifeImgs[randomIndex10]} alt="FalchionKnife" /><p>Falchion Knife</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="SkeletonKnife"><img src={SkeletonKnifeImgs[randomIndex11]} alt="SkeletonKnife" /><p>Skeleton Knife</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="FlipKnife"><img src={FlipKnifeImgs[randomIndex12]} alt="FlipKnife" /><p>Flip Knife</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="ShadowDaggers"><img src={ShadowDaggersImgs[randomIndex13]} alt="ShadowDaggers" /><p>Shadow Daggers</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="GutKnife"><img src={GutKnifeImgs[randomIndex14]} alt="GutKnife" /><p>Gut Knife</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="ParacordKnife"><img src={ParacordKnifeImgs[randomIndex15]} alt="ParacordKnife" /><p>Paracord Knife</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="HuntsmanKnife"><img src={HuntsmanKnifeImgs[randomIndex16]} alt="HuntsmanKnife" /><p>Huntsman Knife</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="NomadKnife"><img src={NomadKnifeImgs[randomIndex17]} alt="NomadKnife" /><p>Nomad Knife</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="KukriKnife"><img src={KukriKnifeImgs[randomIndex18]} alt="KukriKnife" /><p>Kukri Knife</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="NavajaKnife"><img src={NavajaKnifeImgs[randomIndex19]} alt="NavajaKnife" /><p>Navaja Knife</p></Link> { }
                            </div>
                            <div className="ItemDaGaleria">
                                <Link to="M9Bayonet"><img src={M9BayonetImgs[randomIndex20]} alt="M9Bayonet" /><p>M9 Bayonet</p></Link> { }
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