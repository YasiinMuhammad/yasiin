import React from "react";
import ButtonAppBar from "../../components/Navbar";
import Container from 'react-bootstrap/Container';
import { Row, Col, Image } from "react-bootstrap";
import "./style.css";
import Footer from "../../components/Footer";



function Home() {
    return (
        <React.Fragment >
        <div id="hero">
          <div id="hero-overlay">
          <ButtonAppBar />
            <Container>
            <Row>
                <Col className="box">
                    <div className="bordered">
                        <b><p className="logo">YM </p></b>
                        <span><p className="logo1">Design Studio</p></span>
                    </div>
                </Col>
                </Row>
            </Container>
            <Container className="homePage" fluid={true} >
            <Row>
                <Col sm={12} className="A">
                    <h1 className="layoutState"><b>Web Designer / Full Stack Developer</b></h1>
                    <u>  <span><h2 className="layoutState2">Hello, I'm Yasiin I specialize in web design, and <br />
                        Full Stack Development.</h2></span></u>
                </Col>
            </Row>
            <Container>
                <Row >
                   
                    <Col className="box" >
                        <Image className="imgProfile"src="http://via.placeholder.com/140x160" roundedCircle />
                    </Col>
                   
                </Row>
            </Container>
            
           
           
        </Container>
        </div>
        </div>
        <Footer />
</React.Fragment>

    );
    
}

export default Home;
