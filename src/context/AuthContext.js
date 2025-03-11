import React, {createContext, useState, useEffect} from 'react';

/*Exportation du contexte pur y avoir acces*/
export const AuthContext = createContext(null);

/*Creation du povider pour la connexion et la deco*/
export function  AuthProvider({children }) {
    const [user, setUser] = useState(null); // Client
    const [token,setToken]= useState(null); //token JWT

    // Stockage dans le LocalStorage pour la persistance des donnes
    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        if (storedUser && storedToken){
            setToken(storedToken)
            setUser(JSON.parse(storedUser));
        }
    }, []);

    //Si le token ou l'user change on met a jour le localStorage
    useEffect(() => {
        if (token && user){
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
        }else{
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        }
    }, [token, user]);
// Connexion (on recoit les donnes envoyées apr l'api : token + infos user)
    const login = (jwt, userData) => {
        setToken(jwt);
        setUser(userData);
    };
    // Deconnexion
    const logout = () => {
        setToken(null);
        setUser(null);
    };
const value = {
    token,
    user,
    login,
    logout,
    isAuthenticated : !!token, // true or false
}

return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}


