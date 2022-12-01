import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="black" variant="dark">
        <Container>
          <Navbar.Brand>CriticScale</Navbar.Brand>
          {/* <Nav className="me-auto">
            <Nav.Link href="#features">Artist</Nav.Link>
            <Nav.Link href="#pricing">Albums</Nav.Link>
          </Nav> */}
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      <br></br>
    </>
  );
}

export default ColorSchemesExample;
