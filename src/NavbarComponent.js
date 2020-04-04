import React from "react";
import { Button, Nav, Spinner,NavDropdown, Navbar } from 'react-bootstrap';
import firebase from 'firebase';

class NavbarComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        
        return (

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <img src={this.props.userPhoto}
                     className="rounded-circle z-depth-0"
                     alt="avatar image"
                     height="35"/>
                <Navbar.Brand href="#home">Pushup Challenge</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Stats</Nav.Link>
                        <Nav.Link onClick={() => firebase.auth().signOut()}>Sign Out</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                
                
            </Navbar>
        );
    }
    
    
    
    
}
export default NavbarComponent;