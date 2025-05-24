import React from "react";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div>
        <Navbar expand="lg" className="">
          <Container fluid>
            <Navbar.Brand as={Link} to="/">
              <Image src="/logo.png" height={"100px"} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/" className="custom-nav-link">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="#action1" className="custom-nav-link">
                  About Us
                </Nav.Link>
                <Nav.Link as={Link} to="#action1" className="custom-nav-link">
                  Contact Us
                </Nav.Link>
                <Nav.Link as={Link} to="/admin" className="custom-nav-link">
                  Admin
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 customInput"
                  aria-label="Search"
                />
                <Button variant="" className="customBtn">
                  Search
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
