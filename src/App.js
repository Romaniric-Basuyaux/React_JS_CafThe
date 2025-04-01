import "./styles/App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import {AuthProvider} from "./context/AuthContext";
import Login from "./pages/Login";
import Café from "./pages/Café";
import Thé from "./pages/Thé";
import Accessoires from "./pages/Accessoires";
import Shop from "./pages/Shop";
import GlobalStyles from "./GlobalSysteme";
import New_user from "./pages/New_user"


function Produit() {
    return null;
}

function App(props) {
    const App = () => {
        return (
            <>
                <GlobalStyles />
                <div className="container">
                    <h1>Bienvenue dans l'univers du Café et du Thé</h1>
                    <p>Profitez d'un moment de détente avec une typographie élégante ☕🍵</p>
                </div>
            </>
        );
    };


    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path={"/"} element={<Layout />}>
                    <Route index element={<Home/>}/>
                        <Route path="produit/:id" element={<ProductDetails />} />
                        <Route path={"login"} element={<Login />} />
                        <Route path={"Home"} element={<Home />} />
                        <Route path="Café" element={<Café />}  />
                        <Route path="Thé" element={<Thé />}  />
                        <Route path="Accessoires" element={<Accessoires />}  />
                        <Route path={"New_user"} element={<New_user/>} />
                        <Route path="Shop" element={<Shop />} />
                    </Route>
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;