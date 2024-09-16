import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch, FaFacebook, FaTwitter, FaInstagram, FaIceCream } from 'react-icons/fa';

const CustomNavbar = () => {
  return (
    <>
      <Navbar expand="lg" fixed="top" className="mb-5 bg-dark rounded-3">
        <Navbar.Brand href="#" className="ms-3 text-white">
          <FaIceCream size={40} /> {/* Tatlı simgesi */}
          <span className='ms-5 fs-3 text-white text-decoration-underline'> Dolci Marevigliosi</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" className="me-3 bg-white" />
        <Navbar.Collapse id="offcanvasNavbar">
          <Nav className="navbar-nav ms-3">
            <Nav.Link className='text-white' href="#home">Anasayfa</Nav.Link>
            <Nav.Link className='text-white' href="#products">Ürünler</Nav.Link>
            <Nav.Link className='text-white' href="#cart">Sepet</Nav.Link>
            <Nav.Link className='text-white' href="#contact">İletişim</Nav.Link>
          </Nav>
          <div className="form-container d-flex justify-content-center align-items-center flex-grow-1">
            <Form className="d-flex w-100">
              <FormControl
                type="search"
                placeholder="Ara"
                className="m-3 flex-grow-1"
                aria-label="Search"
              />
              <Button variant="outline-success" className='m-3'>
                <FaSearch />
              </Button>
            </Form>
            <div className="divider" />
            <div className="social-icons m-3">
              <a href="https://facebook.com" className="me-3">
                <FaFacebook size={25} />
              </a>
              <a href="https://twitter.com" className="me-3">
                <FaTwitter size={25} />
              </a>
              <a href="https://instagram.com">
                <FaInstagram size={25} />
              </a>
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default CustomNavbar;

