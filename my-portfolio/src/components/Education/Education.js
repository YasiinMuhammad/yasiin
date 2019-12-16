import React from "react";
import { Timeline, Event } from "react-timeline-scribble";


const Education = (props) => {
    return (
        <div>
            <Timeline>
            <Event 
            interval={props.interval} title={props.title} subtitle={props.subtitle}>
            <p className="edu3"> discription:{props.discription}</p>
            </Event>
            </Timeline>
            
        </div>
    )
}

export default Education;