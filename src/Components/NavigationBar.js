// Import statements to import react, react icons, and react bootstrap navbar components.
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Link } from "react-router-dom";

// Create function componenent, NavigationBar.
// Navbar component with a navbar-expand property set to md (768px) breakpoint for responsive collapsing.
// NavbarToggle component for a hamburger icon under 768 px breakpoint.
// NavbarCollapse component for set of navigation links that are grouped and
// hidden by a parent breakpoint of 768px.
function NavigationBar() {
  return (
    <Navbar expand="md" className="px-5 py-3 bg-light" fixed="top">
      <NavbarToggle
        aria-controls="basic-navbar-nav"
        className=""
      ></NavbarToggle>
      <NavbarCollapse id="basic-navbar-nav" className="justify-content-center">
        <Nav className="px-md-5 fs-5">
          <Link to="/" className="px-md-5 py-md-1 py-1 text-decoration-none">
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
          <Link
            to="/social"
            className="px-md-5 py-md-1 py-1 text-decoration-none"
          >
            Social
          </Link>
        </Nav>
      </NavbarCollapse>
    </Navbar>
  );
}

// Export the NavigationBar componenent to make it available to import to other files.
export default NavigationBar;
