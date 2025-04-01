import React from 'react';
import New_user from '../styles/New_user.css';


function NewUser(props) {
    return (
        <div>

            <h1 className={"inscription"}>Inscription</h1>
            <form className={"form_inscription"} id="inscription" method="post" action="#">
                <div class="form-group">
                    <label for="nom" class="required">Nom</label>
                    <input type="text" id="nom" name="nom" required />
                </div>

                <div class="form-group">
                    <label for="prenom" class="required">Prénom</label>
                    <input type="text" id="prenom" name="prenom" required />
                </div>

                <div class="form-group">
                    <label for="email" class="required">Email</label>
                    <input type="email" id="email" name="email" required/>
                </div>

                <div class="form-group">
                    <label for="motdepasse" class="required">Mot de passe</label>
                    <input type="password" id="motdepasse" name="motdepasse" required/>
                </div>

                <div class="form-group">
                    <label for="confirmation" class="required">Confirmation mot de passe</label>
                    <input type="password" id="confirmation" name="confirmation" required/>
                </div>

                <div class="form-group">
                    <label for="adresse">Adresse</label>
                    <input type="text" id="adresse" name="adresse"/>
                </div>

                <div class="form-group">
                    <label for="telephone">Numéro de téléphone</label>
                    <input type="tel" id="telephone" name="telephone"/>
                </div>

                <button className={"inscrire"} type="submit">S'inscrire</button>
            </form>
        </div>
    );
}

export default NewUser;