import React from "react";
import "./style.css";
import ButtonAppBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Edu from "../../components/Education/Edu"
import Emp from "../../components/Employment/Emp"
import { Container, Row, Col, Image, Button } from "react-bootstrap"




function Resume() {
  return (
    // <div id="resume-page">
    //   <div id="resume-overlay">
    //     <ButtonAppBar />
    //     <Container fluid={true} className="grid-container">
    //       <div className="bordered-resume" >
    //         <b><h1 className="page-head">MY RESUME</h1></b>
    //       </div>
    //     </Container>
    //     <Container fluid={true}>
    //       <Row className="grid-sub-header">
    //           <Col className="employment">
    //           <h3 className="resume-col-head">EMPLOYMENT HISTORY</h3>
    //             <Edu />
    //             </Col>
    //           <Col className="education-skills">
    //           <h2 className="resume-col-head">EDUCATION</h2>
    //             <Emp />
    //         </Col>
    //       </Row>
    //           <Row className="grid-row-sub-header">
    //             <Col>
    //               <b><h2 className="skills-head">MY SKILLS</h2></b>
    //               <div className="bordered-skills" >
    //                 <i className="fab fa-react"></i>
    //                 <i className="fab fa-node"></i>
    //                 <i className="fab fa-html5"></i>
    //                 <i className="fab fa-css3-alt"></i>
    //                 <i className="fab fa-js"></i>
    //                 <img alt="jQurey" src="https://img.icons8.com/ios-filled/100/000000/jquery.png"></img>
    //                 <img alt="mongoLogo" src="https://img.icons8.com/color/96/000000/mongodb.png"></img>
    //                 <img alt="mysql" src="https://img.icons8.com/ios/96/000000/mysql-logo.png"></img>



    //               </div>
    //             </Col>
    //           </Row>
    //     </Container>
    //   </div>
    // </div>
    <React.Fragment>
      <header className="header">
        <ButtonAppBar />
        <div className="header-box">
          <Container className="resume-title">
            <h2>MY RESUME</h2>
          </Container>
        </div>
      </header>
      <article className="wrapper">
        <div className="inner-wrapper">
          <Row className="resume-header">
            <Col className="resume-img" xs={6} sm={3}>
              <Image src="https://via.placeholder.com/180"
                thumbnail />
            </Col>
            <Col className="resume-discription">
            <h2>Yasiin Muhammad</h2>
            <p>Full Stack Developer</p>
            <Button className="email-button" variant="link"> <i className="far fa-envelope"></i> Ymtechstudio@gmail.com</Button>
            <p> <i className="fas fa-mobile-alt"></i> (602) 397-5820</p>
            
            <Col>
            </Col>
            <Col>
            </Col>

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

            <Col className="work-experience">
              <h3> Work Experience</h3>
            </Col>
            <Col className="skills" md={4}>
              <h3>Skills & Tools</h3>
            </Col>
          </Row>
          <Row>
            <Col className="work-experience" sm={8}>
              <Edu />
            </Col>
            <Col className="skills" sm={4}>
              <Emp />
            </Col>
          </Row>
        </div>

      </article>
    </React.Fragment>
  )

}

export default Resume;