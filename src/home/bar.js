import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";

function Bar(props) {
  const [navBar, setNavBar] = useState(false);

  const changeNavBackground = () => {
    if (window.scrollY >= 425) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", changeNavBackground);

  return (
    <div id="_nav">
      <Navbar
        collapseOnSelect
        expand="lg"
        fixed="top"
        className={navBar ? "nav-dark transition" : "nav-light transition"}
      >
        <Navbar.Toggle aria-controls="responsive-navbar" />
        <Navbar.Brand className="mx-auto" id="nav-brand" href="#home">
          JITRAPON
        </Navbar.Brand>

        <Navbar.Collapse id="responsive-navbar">
          <Nav className="ml-auto">
            <Nav.Link id="nav-item" href="#_home">
              Home
            </Nav.Link>
            <Nav.Link id="nav-item" href="#_aboutMe">
              About Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Bar;
