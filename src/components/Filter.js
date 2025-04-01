import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import '../styles/Filter.css';



function Filter() {
    const [filter, setFilter] = useState("asc");
    const [categorie, setCategorie] = useState("cafe");
    const [produits, setProduits] = useState([]);

    const handleChange = (event) => {
        setFilter(event.target.value);
    };
    const handleChangeCat = (event) => {
        setCategorie(event.target.value);
    };

    useEffect(() => {
        const fetchProduit = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_API_URL}/api/produitfilter?cat=${categorie}&filter=${filter}`
                );
                setProduits(response.data);
            } catch (error) {
                console.error("Erreur de chargement des produits :", error);
            }
        };

        fetchProduit();
    }, [filter, categorie]);

    return (
        <div>
            <div className={"filter--select"}>
                <span className={"price"}>Filtrer par :  </span>
                <select className="filter_prix" onChange={handleChange} value={filter}>
                    <option value="asc">Prix croissant</option>
                    <option value="desc">Prix décroissant</option>
                </select>

                <span className={"cat"}> Filtrer par : </span>
                <select className="filter_categorie" onChange={handleChangeCat} value={categorie}>
                    <option value="cafe">Café</option>
                    <option value="the">Thé</option>
                    <option value="acc">Accessoires</option>
                </select>
            </div>
            <div className={"produit"}>
                {produits.map((produit) => (
                    // <li key={produit.id_produit}>{produit.designation_produit} - {produit.prix_ht_produit}€</li>
                    <ProductCard key={produit.id_produit} produit={produit}/>

                ))}
            </div>
        </div>
    );
}

export default Filter;
