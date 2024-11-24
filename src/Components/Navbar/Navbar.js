import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {
  FaHome,
  FaBox,
  FaWarehouse,
  FaUsers,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaClipboardList,
} 
from 'react-icons/fa';
import './Navbar.css';

const NavBar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [dropdownAlign, setDropdownAlign] = useState('right');
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsToggled(!isToggled); // Toggle the state for hamburger menu animation
  };

  useEffect(() => {
    // Check window size and dropdown position
    const checkDropdownPosition = () => {
      if (dropdownRef.current) {
        const rect = dropdownRef.current.getBoundingClientRect();
        // If dropdown is outside the window (right side), align it to the left
        if (rect.right > window.innerWidth) {
          setDropdownAlign('left');
        } else {
          setDropdownAlign('right');
        }
      }
    };

    // Run when component mounts and whenever window is resized
    window.addEventListener('resize', checkDropdownPosition);
    checkDropdownPosition(); // Initial check

    return () => {
      window.removeEventListener('resize', checkDropdownPosition);
    };
  }, []);

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Navbar.Brand as={Link} to="/" className="navbar-brand">
        <FaBox className="navbar-logo animated-icon" /> 
        <span className="brand-text">Fusion4 Inventory</span>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} className="custom-toggler">
        {/* Animated Hamburger Menu */}
        <div className={`navbar-toggler-icon ${isToggled ? 'toggled' : ''}`}>
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
      </Navbar.Toggle>

      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="nav-links">
          <Nav.Link as={Link} to="/" className="nav-item-link">
            <FaHome className="nav-icon animated-icon" /> Home
          </Nav.Link>
          <Nav.Link as={Link} to="/dashboard" className="nav-item-link">
            <FaClipboardList className="nav-icon animated-icon" /> Dashboard
          </Nav.Link>
          <Nav.Link as={Link} to="/products" className="nav-item-link">
            <FaWarehouse className="nav-icon animated-icon" /> Products
          </Nav.Link>
          <Nav.Link as={Link} to="/suppliers" className="nav-item-link">
            <FaUsers className="nav-icon animated-icon" /> Suppliers
          </Nav.Link>
          <Nav.Link as={Link} to="/reports" className="nav-item-link">
            <FaClipboardList className="nav-icon animated-icon" /> Reports
          </Nav.Link>
          <NavDropdown
            title={<FaUser className="nav-icon animated-icon" />}
            id="account-dropdown"
            ref={dropdownRef} // Reference to detect overflow
            align={dropdownAlign}
            className={`account-dropdown ${dropdownAlign}`}
          >
            <NavDropdown.Item as={Link} to="/profile">
              <FaUser className="dropdown-icon" /> Profile
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/settings">
              <FaCog className="dropdown-icon" /> Settings
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <FaSignOutAlt className="dropdown-icon" /> Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
