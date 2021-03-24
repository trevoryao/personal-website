import './Navbar.css';
import {Nav, Navbar} from 'react-bootstrap'

function RenderNav() {
  return (
    <Navbar>
      <Nav className="mr-auto">
        <Nav.Link href="#about">About me</Nav.Link>
        <Nav.Link href="#projects">Favourite projects</Nav.Link>
        <Nav.Link href="#experience">My Experience</Nav.Link>
        <Nav.Link href="#school">School</Nav.Link>
        <Nav.Link href="#contact">Get in Touch</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default RenderNav;
