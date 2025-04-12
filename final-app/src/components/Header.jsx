import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import Home from './Home';
import Recipes from "./Recipes";
import Search from "./Search";

const Header = () => {
  return (
    <>
      <Navbar bg="bg-primary" variant="light">
        <Container>
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" element={<Home />}>Home</Nav.Link>
            <Nav.Link as={Link} to="/recipes" element={<Recipes />}>Recipes</Nav.Link>
            <Nav.Link as={Link} to="/search" element={<Search />}>Search</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;