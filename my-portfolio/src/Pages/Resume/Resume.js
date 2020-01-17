import React from "react";
import "./style.css";
import ButtonAppBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Edu from "../../components/Education/Edu"
import Emp from "../../components/Employment/Emp"
import { Container, Row, Col, Image, Button, Nav } from "react-bootstrap"




function Resume() {
  return (

    <React.Fragment>
      <header className="header">
        <header className="header-overlay">
          <ButtonAppBar />
          <div className="header-box">
            <Container className="resume-title">
              <b><p className="resume-title-head">MY RESUME</p></b>
            </Container>
          </div>
        </header>
      </header>
      <article className="wrapper">
        <div className="inner-wrapper">
          <Row className="resume-header">
            <Col className="resume-img" xs={6} sm={3}>
              <Image src="https://via.placeholder.com/180"
                thumbnail />
            </Col>

            <Col sm={5} className="resume-discription">
              <h2>Yasiin Muhammad</h2>
              <p>Full Stack Developer</p>
              <Button className="email-button" variant="link"> <i className="far fa-envelope"></i> YMtechstudio@gmail.com</Button>
              <p> <i className="fas fa-mobile-alt"></i> (602) 397-5820</p>
            </Col>

            <Col className="resume-links" sm={3}>
              <Row className="linkedin-row">
                <p> <i className="fab fa-linkedin"></i>
                  <a href='www.linkedin.com/in/yasiin-58b96b91' className="linkedin"> www.linkedin.com/in/yasiin-58b96b91</a></p>
              </Row>
              <Row className="git-row">
                <p> <i className="fab fa-github-square"> </i>
                  <a href='https://github.com/YasiinMuhammad' className="git-hub"> https://github.com/YasiinMuhammad</a> </p>
              </Row>
            </Col>



          </Row>
          <Row className="resume-body">
            <section className="career-summary">
              <h3>CAREER SUMMARY</h3>
            </section>
            <div className="career-body">
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
            </div>
          </Row>
          <Row className="experience-body">
            <Col className="work-experience" md={7}>
              <section className="work-header"> <h3> Work Experience</h3> </section>
              <div className="work"> <Edu /> </div>
            </Col>
            <Col className="skills" md={5}>
              <section className="work-header"><h3>Skills & Tools</h3></section>
              <Row>
                <Emp />
                <Col>
                  <Row>
                    <Col sm={4}><i className="fab fa-react"></i></Col>
                    <Col sm={4}><i className="fab fa-node"></i></Col>
                    <Col sm={4}><i className="fab fa-html5"></i></Col>
                  </Row>
                  <Row>
                    <Col sm={4}><i className="fab fa-css3-alt"></i></Col>
                    <Col sm={4}><i className="fab fa-js"></i></Col>
                    <Col sm={4}><img alt="jQurey" src="https://img.icons8.com/ios-filled/100/000000/jquery.png"></img></Col>
                  </Row>
                  <Row>
                    <Col sm={4}><img alt="mysql" src="https://img.icons8.com/ios/96/000000/mysql-logo.png"></img></Col>
                    <Col sm={4}><img alt="mongoLogo" src="https://img.icons8.com/color/96/000000/mongodb.png"></img></Col>
                    <Col sm={4}></Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>

        </div>

      </article>
      < Footer />
    </React.Fragment>
  )

}

export default Resume;