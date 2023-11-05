import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  return (
    <Navbar expand="lg" className="navBar">
      <Container>
        <Link to="/" className="navbar-brand">
          JohnnyWxWizard
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
              to="/"
            >
              Home
            </Link>
            <Link
              className={
                location.pathname === "/mylist" ? "nav-link active" : "nav-link"
              }
              to="/mylist"
            >
              My List
            </Link>
            <Link
              className={
                location.pathname === "/settings"
                  ? "nav-link active"
                  : "nav-link"
              }
              to="/settings"
            >
              Settings
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
