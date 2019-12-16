import React, { Component } from "react";
import Projects from './Projects'


class Project extends Component {
    state = {
        projects: [
            {   project: "Eat the Burger",
                discription: "This exercise is a full stack development using the MVC framework. It uses a front-end of HTML/CSS and handlebars. The back-end uses node-js, express, and handlebars. Data is kept in a MYSQL database.",
                techUsed: "HTML, CSS, Node.js, Express.js, Handlebars, MYSQL, Express, body-parser, handlebars",
                link: <a href="https://boiling-castle-88722.herokuapp.com">Check out my project</a>,



            },
            {
                discription: "Sure Shelter is a web-based application allowing users to search for Homeless Shelters in their area, as well as allowing companies to sign up to donate goods or services.",
                techUsed: "HTML, CSS, Node.js, Express.js, Handlebars, MYSQL, Express, body-parser, handlebars",
                link: <a href="https://blueberry-cake-83079.herokuapp.com">Check out my project</a>,
            },

            {
                discription: "In need of a friend? Oh boy, time to get on our app, and find that special someone. After filling out a quick survey, our friend-matching algorithm will pair you with an individual in our network.",
                techUsed: "HTML, CSS, Node.js, Express.js, Handlebars, MYSQL, Express, body-parser, handlebars",
                link: <a href="https://boiling-castle-88722.herokuapp.com">Check out my project</a>,
            },

            {
                discription: "The responsive application allows users to research recipes of their choice and displays generated recipes on the main page",
                techUsed: "HTML, CSS, Node.js, Express.js, Handlebars, MYSQL, Express, body-parser, handlebars",
                link: <a href="https://boiling-castle-88722.herokuapp.com">Check out my project</a>,
            },
        ]
    }
    render =() => {
        return (
            <div>
                <figure className="fig">
                    <div className="box2">
                     <Projects project={this.state.projects[0].project} discription={this.state.projects[0].discription} techUsed={this.state.projects[0].techUsed} link={this.state.projects[0].link}>Eat</Projects>
                     </div>
                     </figure >
                    
                     <figure className="fig">
                    <div className="box2">
                    <Projects project={this.state.projects[1].project} discription={this.state.projects[1].discription} techUsed={this.state.projects[1].techUsed} link={this.state.projects[1].link}>Sure</Projects>
                    </div>
                     </figure >

                    <figure className="fig">
                    <div className="box2"> 
                    <Projects discription={this.state.projects[2].discription} techUsed={this.state.projects[2].techUsed} link={this.state.projects[2].link}>Friend</Projects>
                    </div>
                     </figure >
                    
                    <figure className="fig">
                    <div className="box2">
                    <Projects discription= {this.state.projects[3].discription} techUsed={this.state.projects[3].techUsed} link={this.state.projects[3].link}>Recipe</Projects>
                    </div>
                     </figure >
                

            </div>
        )
        }
        
};

export default Project;

 
