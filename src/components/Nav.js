import React, {useContext} from 'react';
import {createRoutesFromChildren, Link} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import "../styles/Nav.css";
import Café from "../pages/Café";
import {FaFontAwesomeIcon, FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";





function Nav(props) {
    const {user, isAuthenticated, logout} = useContext(AuthContext);
    const handleLogout = () => {
        logout();
    };

    console.log(user)
    return (
        <nav>


            <section>

                <div className="Header">
                    <div className="Navbar">
                        <div className={"logo"}>
                            <Link className={"Cafthé"} to="/" > <div className={"border"}>CafThé.</div></Link>
                        </div>



                        <div className={"direction"}>
                            <ul className={"list_btn"}>
                                <div className={"recherche"}>
                                <label htmlFor="site-search">Saisissez votre recherche </label>
                                <input className={"input"} type="search" id="site-search" name="q"/>

                                <button className={"search"}>Rechercher</button>
                            </div>
                                <button><li><Link className={"home"} to="/Home">Accueil</Link></li></button>
                                <button><li><Link className={"cafe"} to="/Café">Produits</Link></li></button>
                                <Link className={"shop"} to="/shop"> <FontAwesomeIcon icon={faCartShopping} /></Link>
                                <li className={"login"}>
                                    {isAuthenticated ? (
                                        <>
                                            <span>Bonjour {user.nom}</span>
                                            <button onClick={handleLogout}>Se déconnecter</button>
                                        </>
                                    ):(
                                        <Link className={"connect"} to="/login"> <FontAwesomeIcon icon={faUser} /></Link>

                                    )}
                                </li>
                            </ul>
                        </div>




                    </div>
                </div>
            </section>
        </nav>
    );
}

export default Nav;