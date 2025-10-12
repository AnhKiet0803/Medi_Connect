import React, { useContext } from "react";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthContext from "../Context/Context";

export default function Header() {
  const { user, role, logout } = useContext(AuthContext);
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-primary fw-bold fs-4">
          MediConnect
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="text-primary fw-medium">Home</Nav.Link>
            <Nav.Link as={Link} to="/doctors" className="text-primary fw-medium">Doctors</Nav.Link>
            <Nav.Link as={Link} to="/appointments" className="text-primary fw-medium">Make an appointment</Nav.Link>
            <Nav.Link as={Link} to="/articles" className="text-primary fw-medium">News</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-primary fw-medium">Contact</Nav.Link>
          </Nav>
          <Nav>
            {user ? (
              <>
                <span className="me-3 fw-semibold text-primary">
                  Hello, {user.fullName}
                </span>
                <NavDropdown title="Tài khoản" id="user-dropdown" align="end">
                  {role === "admin" && (
                    <>
                      <NavDropdown.Item as={Link} to="/admin/dashboard">Admin page</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/admin/manage-users">User management</NavDropdown.Item>
                    </>
                  )}
                  {role === "doctor" && (
                    <>
                      <NavDropdown.Item as={Link} to="/doctor/profile">Doctor profile</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/doctor/appointments">Examination schedule</NavDropdown.Item>
                    </>
                  )}
                  {role === "patient" && (
                    <>
                      <NavDropdown.Item as={Link} to="/patient/profile">Patient profile</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/patient/appointments">My appointment schedule</NavDropdown.Item>
                    </>
                  )}
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logout} className="text-danger">Log out</NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                <Button as={Link} to="/login" variant="outline-primary" className="ms-3">Login</Button>
                <Button as={Link} to="/register" variant="primary" className="ms-2">Register</Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
