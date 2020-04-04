import React from "react";
import { Button, Nav, Spinner, Navbar } from 'react-bootstrap';
class NavbarComponent extends React.Component {
    render() {
        
        return (

            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Pushup Challenge</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    {/*<Spinner animation="grow" variant="red" />*/}
                </Nav>




                <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" 
                     className="rounded-circle z-depth-0"
                     alt="avatar image" 
                     height="35"/>
                
            </Navbar>
        );
    }
    
    
    
    
}
export default NavbarComponent;