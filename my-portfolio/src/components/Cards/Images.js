import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Project from './Project'
import "./style.css";




class LightboxPage extends React.Component {
        render() {
                return (
                        <React.Fragment>
                                <Container className="portfoilo-artilce">
                                        <Row>
                                                <div className="portfolio-header">
                                                        <div className="portfolio-article-wrapper">
                                                                <h1 className="portfolio-title">portfoilo</h1>
                                                        </div>
                                                </div>
                                        </Row>
                                        <Row className="column-head">
                                                <Project />
                                        </Row>
                                </Container>
                        </React.Fragment>

                );
        }
}

export default LightboxPage;