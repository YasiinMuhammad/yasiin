import React, { Component } from "react";
import Projects from './Projects'
import Burger from './img/eatMoreBurger.png'
import Recipe from './img/recipeTown.png'
import Shelter from './img/sureShelter.png'

import { Row, Col, Container } from "react-bootstrap";

class Project extends Component {
    state = {
        projects: [

            {
                project: "Eat the Burger",
                discription: "This exercise is a full stack development using the MVC framework. It uses a front-end of HTML/CSS and handlebars. The back-end uses node-js, express, and handlebars. Data is kept in a MYSQL database.",
                techUsed: "HTML, CSS, Node.js, Express.js, Handlebars, MYSQL, Express, body-parser, handlebars",
                link: <a href="https://boiling-castle-88722.herokuapp.com">Check out my project</a>,
                img: "Burger"


            },
            {
                project: "Sure Shelter",
                discription: "Sure Shelter is a web-based application allowing users to search for Homeless Shelters in their area, as well as allowing companies to sign up to donate goods or services.",
                techUsed: "HTML, CSS, Node.js, Express.js, Handlebars, MYSQL, Express, body-parser, handlebars",
                link: <a href="https://blueberry-cake-83079.herokuapp.com">Check out my project</a>,
                img: "Shelter"
            },

            {
                project: "Friend Finder",
                discription: "In need of a friend? Oh boy, time to get on our app, and find that special someone. After filling out a quick survey, our friend-matching algorithm will pair you with an individual in our network.",
                techUsed: "HTML, CSS, Node.js, Express.js, Handlebars, MYSQL, Express, body-parser, handlebars",
                link: <a href="https://boiling-castle-88722.herokuapp.com">Check out my project</a>,
                img: "Friend"
            },

            {
                project: "Recipe Town",
                discription: "The responsive application allows users to research recipes of their choice and displays generated recipes on the main page",
                techUsed: "HTML, CSS, Node.js, Express.js, Handlebars, MYSQL, Express, body-parser, handlebars",
                link: <a href="https://boiling-castle-88722.herokuapp.com">Check out my project</a>,
                img: "Recpie"
            },
        ]
    }
    render = () => {
        return (
            <div>
                <Row className="portfolio-layout">
                    <Col>
                        <img className="box2" src={Burger}></img>
                        <div className="portfolio-caption">
                            <Projects project={this.state.projects[0].project}> </Projects>
                        </div>
                        <div className="portfolio-body">
                            <Projects discription={this.state.projects[0].discription} techUsed={this.state.projects[0].techUsed} link={this.state.projects[0].link}>Eat</Projects>
                        </div>
                    </Col >

                    <Col>
                        <img className="box2" src={Shelter}></img>
                        <div className="portfolio-caption">
                            <Projects project={this.state.projects[1].project}> </Projects>
                        </div>
                        <div className="portfolio-body">
                            <Projects discription={this.state.projects[1].discription} techUsed={this.state.projects[1].techUsed} link={this.state.projects[1].link}>Sure</Projects>
                        </div>
                    </Col >

                    <Col>
                        <img className="box2" src={Recipe}></img>
                        <div className="portfolio-caption">
                            <Projects project={this.state.projects[3].project}></Projects>
                            </div>
                        <div className="portfolio-body"> 
                            <Projects discription={this.state.projects[3].discription} techUsed={this.state.projects[3].techUsed} link={this.state.projects[3].link}>Recipe</Projects>
                        </div>
                    </Col >
                </Row>

            </div>
        )
    }

};

export default Project;


