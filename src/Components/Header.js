import React from "react";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  const userRole = "admin"; 
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm sticky-top">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="text-primary fw-bold fs-4">
          MediConnect
        </Navbar.Brand>

        {/* Toggle Button for mobile */}
        <Navbar.Toggle aria-controls="main-navbar" />

        {/* Navigation Links */}
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="text-primary fw-medium">
              Trang chủ
            </Nav.Link>
            <Nav.Link as={Link} to="/doctors" className="text-primary fw-medium">
              Bác sĩ
            </Nav.Link>
            <Nav.Link as={Link} to="/appointments" className="text-primary fw-medium">
              Đặt lịch
            </Nav.Link>
            <Nav.Link as={Link} to="/articles" className="text-primary fw-medium">
              Tin tức
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-primary fw-medium">
              Liên hệ
            </Nav.Link>
          </Nav>

          {/* User Dropdown */}
          <Nav>
            <NavDropdown title="Tài khoản" id="user-dropdown" align="end">
              {userRole === "admin" && (
                <>
                  <NavDropdown.Item as={Link} to="/admin/dashboard">
                    Trang quản trị
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/admin/manage-users">
                    Quản lý người dùng
                  </NavDropdown.Item>
                </>
              )}
              {userRole === "doctor" && (
                <>
                  <NavDropdown.Item as={Link} to="/doctor/profile">
                    Hồ sơ bác sĩ
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/doctor/appointments">
                    Lịch khám
                  </NavDropdown.Item>
                </>
              )}
              {userRole === "patient" && (
                <>
                  <NavDropdown.Item as={Link} to="/patient/profile">
                    Hồ sơ bệnh nhân
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/patient/appointments">
                    Lịch hẹn của tôi
                  </NavDropdown.Item>
                </>
              )}

              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/logout" className="text-danger">
                Đăng xuất
              </NavDropdown.Item>
            </NavDropdown>

            <Button as={Link} to="/login" variant="outline-primary" className="ms-3">Log in</Button>
            <Button as={Link} to="/register" variant="primary" className="ms-2">Register</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
