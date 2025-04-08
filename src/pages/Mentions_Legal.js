import React from 'react';
import '../styles/Mention_legale.css';



function MentionsLegal(props) {
    return (
        <div>
            <div className="container">
                <h1 className={"Mentions-Légales"}>Mentions Légales</h1>
                <h2 className={"editeur"}>Éditeur du site</h2>
                <p className={"info"}>Nom de l'entreprise : CaféThé E-commerce<br/>
                    Forme juridique : SARL<br/>
                    Adresse : 123 Rue des Arômes, 75000 Paris, France<br/>
                    Téléphone : +33 1 23 45 67 89<br/>
                    Email : contact@cafethe.com<br/>
                    RCS : 123 456 789 RCS Paris</p>

                <h2 className={"Hebergement"}>Hébergement</h2>
                <p className={"info_heberge"}>Hébergeur : Hébergex SAS<br/>
                    Adresse : 45 Avenue des Serveurs, 75010 Paris, France<br/>
                    Téléphone : +33 9 87 65 43 21</p>

                <h2 className={"Propriete_intel"}>Propriété intellectuelle</h2>
                <p className={"Propriete"}>Le contenu du site (textes, images, logos, etc.) est protégé par le droit d'auteur. Toute
                    reproduction sans autorisation est interdite.</p>

                <h2 className={"Protection_données"}>Protection des données</h2>
                <p className={"Données"}>Les données personnelles collectées sur ce site sont utilisées uniquement dans le cadre de la
                    relation commerciale et ne sont en aucun cas revendues à des tiers.</p>
            </div>
        </div>
    );
}

export default MentionsLegal;