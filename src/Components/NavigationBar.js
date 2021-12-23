// Import statements to import react, react icons, and react bootstrap navbar components.
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Link } from "react-router-dom";

// Create function componenent, NavigationBar.
// Navbar component with a navbar-expand property set to lg (992px) breakpoint for responsive collapsing.
// NavbarBrand component for your company, product, or project name.
// NavbarToggle component for a hamburger icon under 992 px breakpoint.
// NavbarCollapse component for set of navigation links that are grouped and
// hidden by a parent breakpoint of 992px.
function NavigationBar() {
  return (
    <Navbar expand="lg" className="px-5 py-3 bg-light" fixed="top">
      <NavbarToggle aria-controls="basic-navbar-nav"></NavbarToggle>
      <NavbarCollapse id="basic-navbar-nav" className="justify-content-start">
        <Nav className="px-lg-5 fs-5">
          <Link
            to="/"
            className="pe-lg-5 p-lg-2 text-primary text-decoration-none"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="pe-lg-5 p-lg-2 text-primary text-decoration-none"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="pe-lg-5 p-lg-2 text-primary text-decoration-none"
          >
            Projects
          </Link>
          <Link
            to="/social"
            className="p-lg-2 text-primary text-decoration-none"
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
