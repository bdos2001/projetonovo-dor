import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

const SkeletonKnife = () => {
    const [SkeletonKnife, setSkeletonKnife] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchSkeletonKnife = async () => {
            try {
                const resposta = await axios.get(API_URL);
                const data = resposta.data;
                const SkeletonKnifeSkins = data.filter((skin) => skin.weapon.name === "Skeleton Knife");
                setSkeletonKnife(SkeletonKnifeSkins);
                setLoading(false);
            } catch (error) {
                console.error("Erro a carregar a skin", error);
                setLoading(false);
            }
        };
        fetchSkeletonKnife();
    }, []
    );
    if (Loading) {
        return (
            <div>A carregar...</div>
        )
    }
    return(
            <div class="Galeria">
                {SkeletonKnife.map((SkeletonKnife)=>(
                    <>
                        <div className="ItemDaGaleria" style={{ background: `${SkeletonKnife.rarity.color}60` }}>
                            <img src={SkeletonKnife.image}></img>
                            <p>{SkeletonKnife.name}</p>
                        </div>
                    </>
                    ))
                }
            </div>
    )
}
export default SkeletonKnife;