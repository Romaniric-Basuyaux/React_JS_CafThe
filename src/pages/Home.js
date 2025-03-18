import React from 'react';
import ProductList from "./ProductList";
import '../styles/Home.css';
import {Link} from "react-router-dom";
import Filter from "../components/Filter";

function Home(props) {
    return (

        <div className="titre">

           <div className={"search"}>
               {/*<Filter/>*/}
           </div>
            <ProductList/>
        </div>


    );
}

export default Home;