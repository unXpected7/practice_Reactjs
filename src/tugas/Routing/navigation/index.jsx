import "./style.css"
import { Link, Outlet } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
const Navigation = () =>{
    return (
        <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
          <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand href="#home">Routing Materi</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link ><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link ><Link to="/lifecycle">lifecyle</Link></Nav.Link>
                    <Nav.Link ><Link to="/komponen">komponen</Link></Nav.Link>
                    <Nav.Link ><Link to="/datafetching">Data Fetching</Link></Nav.Link>
                    <Nav.Link ><Link to="/form">Form</Link></Nav.Link>
                    <Nav.Link ><Link to="/styling">Styling</Link></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          <hr />
          <Outlet />
        </div>
    )
}
export default Navigation;