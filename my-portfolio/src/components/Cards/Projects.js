import React from "react";



const Projects = (props) => {
    return (
        <div>
            
            <h3 > {props.project}</h3>
            <p className="portfolio-discription">{props.discription}</p>
            <p className="portfolio-discription">{props.techUsed}</p>
            {props.link}
           
        </div>
    )
}

export default Projects;