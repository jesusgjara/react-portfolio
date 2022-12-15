import React from "react";
import Header from './components/header/Header'
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Servicio from "./components/servicio/Servicio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";

const App = () => {
  return (
    <>
        <Header/>   
        <Nav/>   
        <About/>   
        <Experience/>   
        <Servicio/>   
        <Portfolio/>   
        <Contact/>   
        <Footer/>   
    </>
  );
};

export default App;
