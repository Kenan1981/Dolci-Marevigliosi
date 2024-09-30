import React from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { FaSearch, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import "./video.scss";
import videoFile from '../assets/video/sweety.mp4';
import { FaCakeCandles } from 'react-icons/fa6';

const CustomNavbar = ({ searchQuery, onSearchChange }) => {
  return (
    <>
      <div className="video-background">
        <video autoPlay muted loop>
          <source src={videoFile} type="video/mp4" />
        </video>
      </div>

      <Navbar expand="lg" fixed="top" className="mb-5 rounded-3">
        <Navbar.Brand href="#" className="ms-3 text-white">
          <FaCakeCandles size={40} />
          <span className='ms-5 fs-3 text-white'>Dolci Marevigliosi</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" className="me-3 bg-white" />
        <Navbar.Collapse id="offcanvasNavbar">
          <Nav className="navbar-nav ms-3">
            <Nav.Link className='text-white' href="#home">Anasayfa</Nav.Link>
            <Nav.Link className='text-white' href="#products">Ürünler</Nav.Link>
            <Nav.Link className='text-white' href="#cart">Sepet</Nav.Link>
            <Nav.Link className='text-white' href="#contact">İletişim</Nav.Link>
          </Nav>
          <div className="form-container d-flex justify-content-start align-items-center flex-grow-1">
            <Form className="d-flex w-75">
              <FormControl
                type="search"
                placeholder="Ara"
                className="m-3 flex-grow-1"
                aria-label="Search"
                value={searchQuery}
                onChange={onSearchChange}
              />
            </Form>
            <div className="social-icons ms-auto d-flex align-items-center">
              <a href="https://facebook.com" className="me-3 text-white">
                <FaFacebook size={25} />
              </a>
              <a href="https://twitter.com" className="me-3 text-white">
                <FaTwitter size={25} />
              </a>
              <a href="https://instagram.com" className="text-white">
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
