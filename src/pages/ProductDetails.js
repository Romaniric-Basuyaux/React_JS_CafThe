import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/ProductDetails.css";


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

    const productImage = `/img/${produit.img_produit || 'placeholder.jpg'}`;

    return (
        <div className="produit-container">
            <div className={"picture"}>
                <img src={productImage} alt={produit.nom} />
            </div>
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
