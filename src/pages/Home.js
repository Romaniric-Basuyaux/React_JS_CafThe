import React from 'react';
import ProductList from "./ProductList";
import '../styles/Home.css';
import {Link} from "react-router-dom";

function Home(props) {
    return (

        <div className="titre">
        <h1>Welcome</h1>
           <div className={"search"}>
               {/*<Filter/>*/}
           </div>
            <ProductList/>
        </div>


    );
}

export default Home;