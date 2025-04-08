import React from 'react';
import '../styles/CGU.css'


function Cgu(props) {
    return (
        <div>
            <h1>Conditions Générales d'Utilisation (CGU)</h1>
            <section>
                <h2 className={"Accept"}>1. Acceptation des Conditions</h2>
                <p className={"Conditions"}>En naviguant sur notre site, l'utilisateur accepte les présentes conditions.</p>
                <h2 className={"Site"}>2. Accès au Site</h2>
                <p className={"p2"}>Notre site est accessible gratuitement à tout utilisateur disposant d’un accès internet.</p>
                <h2 className={"resp"}>3. Responsabilités</h2>
                <p className={"p3"}>Nous ne sommes pas responsables des interruptions du site ou des erreurs indépendantes de notre volonté.</p>
            </section>
        </div>
    );
}

export default Cgu;