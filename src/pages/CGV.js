import React from 'react';
import "../styles/CGV.css";


function Cgv(props) {
    return (
        <div>
            <h1>Conditions Générales de Vente (CGV)</h1>
            <section>
                <h2 className={"objet"}>1. Objet</h2>
                <p className={"p4"}>Les présentes conditions générales de vente régissent la vente en ligne de cafés et thés sur notre site.</p>
                <h2 className={"paiement"}>2. Prix et Paiement</h2>
                <p className={"p5"}>Les prix sont indiqués en euros TTC. Le paiement est sécurisé et peut être effectué par carte bancaire ou PayPal.</p>
                <h2 className={"livraison"}>3. Livraison</h2>
                <p className={"p6"}>Les produits sont livrés sous 3 à 5 jours ouvrés. Les frais de livraison sont indiqués avant la validation de la commande.</p>
                <h2 className={"droit"}>4. Droit de Rétractation</h2>
                <p className={"p7"}>Le client dispose de 14 jours pour retourner un produit non ouvert et en parfait état.</p>
            </section>
        </div>
    );
}

export default Cgv;