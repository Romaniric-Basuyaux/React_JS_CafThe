import React, {useEffect, useState} from 'react';
import axios from "axios";
import ProductCard from "../components/ProductCard";
/*npm install axios*/
/*npm install react-loading-skeleton*/
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../styles/Product-List.css";

function ProductList(props) {
    const [produits,setProduits] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const fetchProduits = async () => {
          try{
              const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/produit`);
              setProduits(response.data);
          } catch (error){
              console.error("Erreur de chargements des produits", error)
          } finally {
              setIsLoading(false)/*On arrete d'afficher le chargement (squelettes)*/
          }
        };
        void fetchProduits();
    }, []);

    if (isLoading){
        return (
            <div className="produc-list">
                {Array.from({length : 6}).map((_,i) => (
                    <div key={i} className="product-skeleton">
                        {/* Image*/}
                        <Skeleton height={200} width={300}/>
                        <div style={{marginTop: "10px"}}>
                            <Skeleton height={20} width="70%"/>
                        </div>


                        <div style={{marginTop: "10px"}}>
                            <Skeleton height={20} width="40%"/>
                        </div>

                    </div>
                ))}
            </div>
        );
    }

    //let produit;
    return (
        <section className={'section-product'}>
            <h2>Liste de nos produits les plus vendus</h2>
            <div className="product-liste">
                {produits.map((produit) => (
                    <ProductCard key={produit.id_produit} produit={produit}/>
                ))}
            </div>
        </section>
    );

}

export default ProductList;