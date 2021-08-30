import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.css';

function Navbars() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {
                                localStorage.getItem('User-details:')
                                ?
                                <>
                                <Link className="navItem" to="/AddProduct">Add Product</Link>
                                <Link className="navItem" to="/UpdateProduct">Update Product</Link>  
                                </>
                                :
                                <>
                                 <Link className="navItem" to="/Login">Login</Link>
                                 <Link className="navItem" to="/Register">Register</Link>
                                </>
                            }
                        
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbars;