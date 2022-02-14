import React from "react";
import { Container, Nav, Navbar, NavDropdown,} from "react-bootstrap";


export default class Navbars extends React.Component {
    render() {
        return (

            <div>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Biodata</Navbar.Brand>
                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Navbar.Collapse id="basic-navbar-nav">
                    <Nav avclassName="me-auto">
                    <Nav.Link href="#home">Education</Nav.Link>
                    <Nav.Link href="#link">Experience</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Contact Person</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Email</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Github Profile</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">LinkedIn</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>

            </div>
        )}
}