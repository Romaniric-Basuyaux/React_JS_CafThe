import React, {useContext, useState} from 'react';
import "../styles/Login.css"
import axios from "axios";
import {AuthContext} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";



function Login(props) {
    const {login} = useContext(AuthContext); // function come from contexte
    const navigate = useNavigate(); //La navigation


    const [email, setEmail] = useState("");
    const [mdp, setMdp] = useState("");
    const [ErrorMsg, setErrorMsg] = useState("");

    const handleSummit = async (e)=> {
        e.preventDefault();
        setErrorMsg("");
        try {
            const response = await axios.post (
                `${process.env.REACT_APP_API_URL}/api/client/login`,
                {
                    email,
                    mdp,
                },
            );

            const {token, client} = response.data;


        // On met à jours le contexte d'authentificaton
            login(token, client);


            // Redirection du client vers une page
            navigate("/");
        } catch (error){
            console.error("Erreur lors de la connexion", error);

            if (error.response.data.message){
                setErrorMsg(error.response.data.message);
            } else{
                setErrorMsg("Erreur");
            }
        }
    };

    return (
        <section className={"section-login"}>
            <form onSubmit={handleSummit}>
                <ul>
                    <li className={"mail"}>
                        <label htmlFor="mail">E-mail&nbsp;:</label><br/>
                        <input type="email"
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                               required
                               id="mail" name="user_mail"/>
                    </li>
                    <li className={"password"}>
                        <label htmlFor="mail">PassWord&nbsp;:</label><br/>
                        <input type="password"
                               value={mdp}
                               onChange={(e) => setMdp(e.target.value)}
                               required
                               id="mail" name="user_mail"/>
                    </li>
                </ul>
                {ErrorMsg && (
                    <div>{ErrorMsg}</div>
                )}

                <div className="se-connecter">
                <button className={"connect"} type="submit">Se connecter</button>
            </div>

                <div className={"account"}>
                    <p className={"new-account"}>Créez un nouveau compte </p>
                </div>
            </form>


        </section>


    );
}

export default Login;