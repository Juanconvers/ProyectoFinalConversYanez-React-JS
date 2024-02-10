import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../../assets/img/LogoFrankyCharly.png"
import { useGetCategories } from '../../hooks/useProducts';
import Cartwidget from './Cartwidget/Cartwidget';


const NavBarComponent = () => {

const {categories} = useGetCategories();



  return (
    <Navbar expand="lg" bg="warning"  className="bg-body-tertiary" style={{background: "#f4a460", padding: "10", fontWeight: "700"}}>
      <Container fluid style={{background: "#d8daf0"}}>
        <Link to="/">
            <img src={Logo} alt="LogoHome" style={{width: 120, padding:15}}/>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link href="#action2">Políticas</Nav.Link>
            
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              {categories.map((category, index) => {
                  return (
                    <NavDropdown.Item key={index}>
                      <Link key={index} to={`/category/${category}`}>{category}</Link>
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>   
          </Nav>
        </Navbar.Collapse>
       <Cartwidget/>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;