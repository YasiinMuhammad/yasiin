import React from "react";
import Container from 'react-bootstrap/Container';
import ButtonAppBar from "../../components/Navbar";


import "./style.css";


function About() {
    return (
        <React.Fragment>
            <div id="about">
          <div id="about-overlay">
            <ButtonAppBar />
            <Container>
                <h1>About Me</h1>
                <p>
My name is Yasiin Muhammad and I am full time freelance web designer who specializes in creating fun and dynamic web pages. I have been working in the field for about 1 year and love every moment of it. I consider myself a life time student expanding my thirst for knowledge. Checkout some of my projects to see what I have been up to lately. </p>

            </Container>
            </div>
            </div>
        </React.Fragment>
    );
}

export default About;
