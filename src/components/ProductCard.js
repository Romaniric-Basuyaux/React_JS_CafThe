import React from 'react';
import {Link} from "react-router-dom";
import "../styles/ProductCard.css";
import cafeBresil from "../img/cafe_bresil.jpg";

function ProductCard({produit}) {
    return (
        <div className={"produit-card"}>
            <img className="img" src={cafeBresil} alt="Café du Brésil" width={300} />
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