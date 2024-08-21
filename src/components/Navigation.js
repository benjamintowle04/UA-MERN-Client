import React, { useState, useEffect } from 'react'
import logo from '../images/logo.png'
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';



const Navigation = ({onSelectTab}) => {
    const navigate = useNavigate();

    const selectTab = (tab) => {
        if (tab === "HomePage") {
            navigate("/");
        }

        else {
            navigate(`/${tab}`);
        }

    }

    return (
        <Navbar expand="md" fixed="top" className="custom-navbar">
            <Container fluid >
                <Navbar.Brand onClick={() => selectTab("HomePage")} className="nav-text">
                    <img src={logo} alt="Image Not Available" className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarCollapse" />
                <Navbar.Collapse id="navbarCollapse">
                    <Nav style={{ color: '#FF3131' }} className="me-auto mb-2 mb-md-0">
                        <a onClick={() => selectTab("HomePage")} className="nav-text">Home</a>
                        <a onClick={() => selectTab("advanced") } className="nav-text">Advanced Athletics</a>
                        <a onClick={() => selectTab("accessible")} className="nav-text">Accessible Athletics</a>
                        <a onClick={() => selectTab("active")} className="nav-text">Active Athletics</a>
                    </Nav>
                    <Nav className="navbar-right">
                        <a onClick={() => selectTab("get-involved")} className="nav-text">Get Involved</a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Navigation;