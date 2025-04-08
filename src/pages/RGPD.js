import React from 'react';
import '../styles/RGPD.css';



function Rgpd(props) {
    return (
        <div>
            <h1>Politique de Confidentialité (RGPD)</h1>
            <section className={"RG-PD"}>
                <div className={"collecte"}>
                    <h2>1. Collecte des Données</h2>
                    <p>Nous collectons uniquement les données nécessaires à la gestion des commandes et des comptes clients.</p>
                </div>

                <div className={"utilisation"}>
                    <h2>2. Utilisation des Données</h2>
                    <p>Les données sont utilisées pour le traitement des commandes et l'amélioration de l'expérience utilisateur.</p>
                </div>

                <div className={"Droits"}>
                    <h2>3. Droits des Utilisateurs</h2>
                    <p>Conformément au RGPD, les utilisateurs peuvent demander l’accès, la modification ou la suppression de leurs données.</p>
                </div>


            </section>
        </div>
    );
}

export default Rgpd;