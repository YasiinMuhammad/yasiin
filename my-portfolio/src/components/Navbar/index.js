import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {Link, animateScroll} from "react-scroll-to"
import "./style.css";

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes}>
      <Navbar bg="light" variant="dark">

        <Nav className="mr-auto">

          <Nav.Link href="/">HOME</Nav.Link>


          <Nav.Link href="/portfolio" >PORTFOLIO</Nav.Link>
        </Nav>

        <Nav className="mr-nice">

          <Nav.Link href="/resume">RESUME</Nav.Link>


          <Nav.Link href="/about">ABOUT</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link className="nav-contact" href="/Contact">CONTACT</Nav.Link>

        </Nav>
      </Navbar>

    </div>
  );
}

export default ButtonAppBar;
