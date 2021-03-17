import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ShopLogo from "../images/shoplogo.jpg";
import ShopImage from "../images/images.jpg";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home" className="ml3">
        {" "}
        <div
          className="rounded badge"
          style={{
            textShadow: "7px 17px",
            height: "50px",
            border: "5px solid #000",
            borderRadius: "30px",
          }}
        >
          V4U
        </div>
        <span></span>
      </Navbar.Brand>
      <Navbar.Brand href="#home">
        <Nav className="nav_links">
          <Nav.Link className="link-search text-primary cart__link">
            <img
              className="cart__image"
              src={ShopLogo}
              alt="Logo"
              style={{ height: "70px", width: "150px", borderRadius: "20px" }}
            />
            <span className="cart__badge">2</span>
            <span></span>
          </Nav.Link>
        </Nav>
      </Navbar.Brand>
      {/* <Navbar.Brand href="#home">
        <img
          className="cart__image"
          src={ShopImage}
          alt="Cart"
          style={{ width: "90px", height: "50px" }}
        />
      </Navbar.Brand> */}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        {/* <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav> */}
        <Form inline className="form__class">
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2 frm__text"
          />
          <Button variant="outline-light" className="frm__button">
            Search
          </Button>
        </Form>
        {/* <Nav className="nav_links">
          <Nav.Link className="link-search text-primary ">Dank memes</Nav.Link>
        </Nav> */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
