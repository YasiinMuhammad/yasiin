import React from "react";



const Projects = (props) => {
    return (
        <div>
            
            <p className="p-img">Project: {props.project}</p>
            <p className="p-img">Discription: {props.discription}</p>
            <p className="p-img">Technology: {props.techUsed}</p>
            {props.link}
           
        </div>
    )
}

export default Projects;