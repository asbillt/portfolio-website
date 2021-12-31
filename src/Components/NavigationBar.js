// Import statements to import react, react icons, and react bootstrap navbar components.
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Link } from "react-router-dom";
import {
  GrLinkedin,
  GrGithub,
  GrStackOverflow,
  GrYoutube,
  GrTwitter,
} from "react-icons/gr";

// Create function componenent, NavigationBar.
// Navbar component with a navbar-expand property set to md (768px) breakpoint for responsive collapsing.
// NavbarToggle component for a hamburger icon under 768 px breakpoint.
// NavbarCollapse component for set of navigation links that are grouped and
// hidden by a parent breakpoint of 768px.
function NavigationBar() {
  return (
    <Navbar expand="md" className="px-5 py-3 bg-light" fixed="top">
      <div className="d-flex justify-content-center ">
        <a
          href="https://www.linkedin.com/in/davidasbill/"
          target="_blank"
          rel="noreferrer"
        >
          <GrLinkedin size={30} className="ms-2 ms-lg-5 me-3 me-lg-5" />
        </a>
        <a href="https://github.com/asbillt" target="_blank" rel="noreferrer">
          <GrGithub size={30} className="me-3 me-lg-5" />
        </a>
        <a
          href="https://stackoverflow.com/users/16709095/david-asbill"
          target="_blank"
          rel="noreferrer"
        >
          <GrStackOverflow size={30} className="me-3 me-lg-5" />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          <GrYoutube size={30} className="me-3 me-lg-5" />
        </a>
        <a href="https://twitter.com/asbillt1" target="_blank" rel="noreferrer">
          <GrTwitter size={30} className="me-lg-5" />
        </a>
      </div>
      <NavbarToggle
        aria-controls="basic-navbar-nav"
        className=""
      ></NavbarToggle>
      <NavbarCollapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="px-md-5 fs-5">
          <Link
            to="/"
            className="px-md-5 py-md-1 py-1 pt-4 text-decoration-none"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="px-md-5 py-md-1 py-1 text-decoration-none"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="px-md-5 py-md-1 py-1 text-decoration-none"
          >
            Projects
          </Link>
        </Nav>
      </NavbarCollapse>
    </Navbar>
  );
}

// Export the NavigationBar componenent to make it available to import to other files.
export default NavigationBar;
