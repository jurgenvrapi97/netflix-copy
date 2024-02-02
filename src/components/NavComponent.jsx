import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Search, Bell, PersonCircle } from 'react-bootstrap-icons'

function NavComponent() {
  return (
    <>
      <Navbar expand="lg">
        <Navbar.Brand className="ms-2" href="#">
          <img
            src="logo.png"
            className="d-inline-block align-top"
            alt="logo"
            width="100"
            height="50"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="text-light text-start"
          id="basic-navbar-nav"
        >
          <Nav className="me-auto ms-3">
            <Nav.Link className="text-light" href="#" active>
              Home
            </Nav.Link>
            <Nav.Link className="text-light" href="#">
              TV Shows
            </Nav.Link>
            <Nav.Link className="text-light" href="#">
              Movies
            </Nav.Link>
            <Nav.Link className="text-light" href="#">
              Recently Added
            </Nav.Link>
            <Nav.Link className="text-light" href="#">
              My List
            </Nav.Link>
          </Nav>
          <Nav className="d-flex flex-sm-row align-items-center ms-3">
            <Search className="text-light me-3" />
            <div id="kids" className="fw-bold text-light  me-3">
              KIDS
            </div>
            <Bell className="text-light  me-4" />
            <PersonCircle className="text-light  me-3" />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavComponent
