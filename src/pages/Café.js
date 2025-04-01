import React, {useEffect, useState} from 'react';
import ProductList from "./ProductList";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import ProductCard from "../components/ProductCard";
import "../styles/cafe.css";
import Filter from '../components/Filter';




function Café(props) {
    const [produits,setProduits] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    // useEffect(() => {
    //     const fetchProduits = async () => {
    //         try{
    //             const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/cafe`);
    //             setProduits(response.data);
    //         } catch (error){
    //             console.error("Erreur de chargements des produits", error)
    //         } finally {
    //             setIsLoading(false)/*On arrete d'afficher le chargement (squelettes)*/
    //         }
    //     };
    //     void fetchProduits();
    // }, []);

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

    return (
        <section className={"section-cafe"}>
            <h2>Liste de nos Produits</h2>
            <Filter/>

        </section>
    );


}

export default Café;