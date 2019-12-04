import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export class NavMenu extends Component {
    displayName = NavMenu.name

    render() {
        return (
            <Navbar inverse fixedTop fluid collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={'/'}></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>                      
                        <LinkContainer to={'/Appointments'}>
                            <NavItem>
                                <Glyphicon glyph='th-list' /> Appointments
                         </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/patients'}>
                            <NavItem>
                                <Glyphicon glyph='th-list' /> Patients
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/doctors'}>
                            <NavItem>
                                <Glyphicon glyph='th-list' /> Doctors
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
