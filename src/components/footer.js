import React from 'react';
import "../styles/Footer.css";


function Footer(props) {
    return (
        <div className={"footer"}>
            <ul className={"li"}>
                <li className={"mention_legal"}>
                    <p className={"mentions"}>Mentions Légales</p>
                </li>
                <li>
                    <p className={"rgpd"}>RGPD</p>
                </li>
                <li>
                    <p className={"cgu"}>CGU</p>
                </li>
                <li>
                    <p className={"cgv"}>CGV</p>
                </li>
            </ul>
        </div>
    );
}

export default Footer;