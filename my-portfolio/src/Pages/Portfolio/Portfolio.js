import React from "react";
import ButtonAppBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./style.css";
import LightboxPage from "../../components/Cards/Images";


function Portfolio() {
    return (
        <React.Fragment>
          <div className="portfolio-page-layout">
          <ButtonAppBar />
        <LightboxPage />
        <Footer/>
        </div>
        </React.Fragment>
    );
}

export default Portfolio;
