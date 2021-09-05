import { Navbar, Nav, Container,NavDropdown } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';
import './App.css';

function Navbars() {
    const user=JSON.parse(localStorage.getItem('User-details:'))

    const redirect=useHistory();
    const logout=()=>{
        localStorage.clear()
        redirect.push('/Login')
    }
    console.log(user)
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
                                <Link className="navItem" to="/ShowProduct">Show Product</Link>  
                                </>
                                :null
                             
                            }
                        
                        </Nav>
                    </Navbar.Collapse>
                    {
                        localStorage.getItem('User-details:')
                        ?
                        <Nav style={{marginRight:40}}>
                        <NavDropdown title={user && user.name}>
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                        <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        :
                        <Nav style={{marginRight:40}}>
                           <Link className="navItem" to="/Login">Login</Link>
                           <Link className="navItem" to="/Register">Register</Link>
                        </Nav>
                        
                   
                    }
                 
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbars;