import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Passions from "./Passions";
import Footer from "./Footer";
function myNavbar() {
  return (
    <div id="navbar">
      <Navbar className="sticky">
        <Container className="h-100">
          <Nav className="jusitfy-content-center ms-auto me-auto navbar">
            <Nav.Link href="#landing">Home</Nav.Link>
            <Nav.Link href="#aboutMe">About Me</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#passions">Passions</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <AboutMe />
      <Experience />
      <Passions />
      <Footer />
    </div>
  );
}
export default myNavbar;
