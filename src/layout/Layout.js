import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/footer";
import Nav from "../components/Nav";


function Layout(props) {
    return (
        <>
        <Header/>
        <Nav/>

            {/* Outlet: La ou s'affchent les pages enfants*/}
        <Outlet/>
    <Footer/>
        </>
    );
}

export default Layout;