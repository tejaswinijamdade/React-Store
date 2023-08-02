import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FiShoppingCart } from "react-icons/fi";
import { Link} from 'react-router-dom';
import styled from 'styled-components';

const MyNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  return (
    <Wrapper>
      <Navbar variant="dark" expand="md" className="mainnavbar" expanded={expanded}>
        <Navbar.Brand>
          <Link to="/">  <img src='images/logo-react.png' alt='logo' /></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='bg-dark me-4' onClick={toggleMenu} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <ul className="navbar-lists navbarlits p-5" >
              <li>
                <Link to="/" className="navbar-link linkStyle" onClick={toggleMenu} >Home</Link>
              </li>
              <li>
                <Link to="/about" className="navbar-link linkStyle" onClick={toggleMenu} >About</Link>
              </li>
              <li>
                <Link to="/products" className="navbar-link linkStyle" onClick={toggleMenu} >Products</Link>
              </li>
              <li>
                <Link to="/contact" className="navbar-link linkStyle" onClick={toggleMenu} >Contact</Link>
              </li>
              <li>
                <Link to="/cart" className="navbar-link cartLinkStyle" onClick={toggleMenu} >
                  <FiShoppingCart className="cart-trolley cartIconStyle"/>
                  {/* <span className="cart-total--item">10</span> */}
                </Link>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Wrapper>
  );
}

const Wrapper= styled.section`
/* Navbar.css */

.mainnavbar {
  background-color: #efefef;
}
div#responsive-navbar-nav {
  height: 87px;
}
.navbarlits {
  display: inline-flex;
  align-items: center;
  position: relative;
  right: 0;
  left: 51rem;
}

.linkStyle {
  color: #000;
  text-decoration: none;
  padding: 8px 15px;
  margin: 0 5px;
  font-size: 2rem;
}

.cartLinkStyle {
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 8px 15px;
  margin: 0 5px;
}

.cartIconStyle {
  margin-right: 5px;
  font-size: 3rem;
}

.navbar-toggler-icon {
  font-size: 3rem !important;
}
.collapseMenu {
  display: none !important;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
    .navbarlits {
        display:block;
      }
      div#responsive-navbar-nav {
        background: #b7c4ff47;
        height: 22rem;
    }
    ul.navbar-lists.navbarlits {
        position: relative;
        right: 0;
        left: 11rem;
    }
    .collapseMenu {
      display: flex;
      justify-content: center; /* Adjust this as per your design needs */
      align-items: center; /* Adjust this as per your design needs */
    }
  }
  @media (min-width: ${({ theme }) => theme.media.mobile}) {
    .collapseMenu {
      display: none;
    }
  }

`;



export default MyNavbar;
