import React from 'react';
import ProductList from "./ProductList";
import '../styles/Home.css';
import {Link} from "react-router-dom";

function Home(props) {
    return (

        <div className="titre">
            <h1>Welcome</h1>

                <div className={"recherche"}>
                    <label htmlFor="site-search">Saisissez votre recherche </label>
                    <input className={"input"} type="search" id="site-search" name="q"/>

                    <button className={"search"}>Rechercher</button>
                </div>
            <ProductList/>
        </div>





    );
}

export default Home;