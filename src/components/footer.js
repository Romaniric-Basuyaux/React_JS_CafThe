import React from 'react';
import "../styles/Footer.css";
import {Link} from "react-router-dom";


function Footer(props) {
    return (
        <div className={"footer"}>
            <ul className={"li"}>
                <li className={"mention_legal"}>
                    <p className={"mentions"}> <Link className={"mention"} to="Mentions_Legal">Mentions Légales </Link></p>
                </li>
                <li>
                    <p className={"rgpd"}><Link className={"RGPD"} to="RGPD"> RGPD</Link></p>
                </li>
                <li>
                    <p className={"cgu"}><Link className={"CGU"} to={"CGU"}>CGU</Link></p>
                </li>
                <li>
                    <p className={"cgv"}><Link className={"CGV"} to={"CGV"}>CGV </Link></p>
                </li>
            </ul>
        </div>
    );
}

export default Footer;