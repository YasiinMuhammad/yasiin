import React, { Component } from "react";
import Employment from './employment'


class Emp extends Component {
    state = {
        emps: [
            {   interval: "2019",
                subtitle: "University of Arizona | Chandler, AZ",
                title: "Full-Stack Web Development Certificate",
                
                
            },
            {   interval: "2013",
                subtitle: "Arizona State University | Tempe, AZ",
                title: "Bachelor of Science in Communication",
                
                
            },
            
           
        ]
    }
    render =() => {
        return (
            <div>
                <Employment interval={this.state.emps[0].interval} title={this.state.emps[0].title} 
                subtitle={this.state.emps[0].subtitle} discription={this.state.emps[0].discription} >
                </Employment>
                <Employment interval={this.state.emps[1].interval} title={this.state.emps[1].title} 
                subtitle={this.state.emps[1].subtitle} discription={this.state.emps[1].discription} >
                </Employment>
                     
            </div>
        )
        }
        
};

export default Emp;
