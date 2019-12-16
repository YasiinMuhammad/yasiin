import React from "react";
import { Timeline, Event } from "react-timeline-scribble";


const Employment = (props) => {
    return (
        <div>
            <Timeline>
            <Event 
            interval={props.interval} title={props.title} subtitle={props.subtitle}>
            </Event>
            </Timeline>
            
        </div>
    )
}

export default Employment;