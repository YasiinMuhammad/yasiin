import React, {Component} from "react";
import { BrowserRouter as Link } from "react-router-dom";
import "./style.css";

class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {year: new Date().getFullYear()};
    }
    render() {
    return (
        <footer className="Foot">
            <ul className="site-link">
                <p>
        &copy;{this.state.year} YM DESIGN STUDIO
        <Link href="#home"><i className="fab fa-twitter"></i></Link>
                <Link href="#features"><i className="fab fa-linkedin-in"></i></Link> 
                </p>
                
            </ul>
        </footer>
      
    ); 
}
}


export default Footer;


               