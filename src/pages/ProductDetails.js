import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/ProductDetails.css";
import cafeBresil from "../img/cafe_bresil.jpg";

function ProductDetails() {
    const { id } = useParams();
    const [produit, setProduit] = useState(null); // Utilisation d'un objet au lieu d'un tableau

    useEffect(() => {
        const fetchProduit = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/produit/${id}`);
                setProduit(response.data);
            } catch (error) {
                console.error("Erreur de chargement du produit", error);
            }
        };
        fetchProduit();
    }, [id]);

    if (!produit) {
        return <p>Chargement en cours...</p>; // Affichage en cas de chargement
    }

    return (
        <div className="produit-container">
            <img className={"imgB"} src={cafeBresil} alt="Café du Brésil" width={"300px"} />
            <div className="details_produit">
                <p className="designation_produit">{produit.designation_produit}</p>
                <p className="description">{produit.description_produit}</p>
                <p className="type"> <strong>Type de conditionnement: </strong>{produit.Type_conditionnement}</p>
                <p className="prix">
                    <strong>Prix HT :</strong> {produit.prix_ht_produit} <strong>€</strong>
                </p>
                <p className="quantite">
                    <strong>Quantité :</strong> {produit.stock_produit}
                </p>
                <button className={"add_detail"}> Ajouter </button>
            </div>
        </div>
    );
}

export default ProductDetails;
