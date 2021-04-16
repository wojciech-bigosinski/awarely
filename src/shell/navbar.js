import React, { Component } from 'react';
import { Navbar, Nav, Form, Button, FormControl, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default class MainNavbar extends React.Component {
    render() {
        return (
            <Navbar expand="lg" style={{backgroundColor: "#1C7CD5"}}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {
                            this.props.informationButton === "true" ?
                            <NavLink to="/information" className="navbarText" style={{color: "#FFF"}}>Information</NavLink>
                            :
                            null
                        }
                    </Nav>
                    <Nav>
                        {
                            this.props.homeButton === "true" ?
                            <NavLink to="/" className="navbarText" style={{color: "#FFF"}}>Home</NavLink>
                            :
                            null
                        }   
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}