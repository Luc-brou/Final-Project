import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import Home from './Home';



const Header = () => {
  return (
    <>

      <Navbar bg="light">
        <Container>
          <Nav>
            <Nav.Link as={Link} to="/" element={<Home />}>Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;


