import React from 'react';
import "../styles/Footer.css";


function Footer(props) {
    return (
        <div className={"footer"}>
            <ul className={"li"}>
                <li>
                    <p>Mentions Légales</p>
                </li>
                <li>
                    <p></p>RGPD
                </li>
                <li>
                    CGU
                </li>
                <li>
                    CGV
                </li>
            </ul>
        </div>
    );
}

export default Footer;