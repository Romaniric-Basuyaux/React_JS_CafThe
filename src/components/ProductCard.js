import React from 'react';
import {Link} from "react-router-dom";
import "../styles/ProductCard.css";


function ProductCard({produit}) {
    const productImage = `/img/${produit.image_produit}`;
    console.log(produit)
    console.log("Nom de l'image :", produit.image_produit);
    console.log("Chemin généré :", productImage);

    return (
        <div className={"produit-card"}>
            <div className={"picture"}>
                <img src={productImage} alt={produit.nom} />
            </div>
            <p>{produit.designation_produit}</p>
            <p className="prix">{produit.prix_ht_produit}</p>
            <Link to={`/produit/${produit.id_produit}`} className="details-btn">
                Voir détails
            </Link>
            <button className="add">Ajouter</button>
        </div>
    );

}



export default ProductCard;