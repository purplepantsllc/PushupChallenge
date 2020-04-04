import React from "react";
import { Button, Card, Nav, Spinner, Navbar } from 'react-bootstrap';
import firebase from 'firebase';


class PushupCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        this.countPushup = this.countPushup.bind(this);
    }


    countPushup() {

        this.setState((state) => {
            // Important: read `state` instead of `this.state` when updating.
            return {count: state.count + 1}


        });
        console.log("+1");
        console.log(this.state.count);
        navigator.vibrate(1000);

        // for this uid>unique session>update count
    }


    render() {

        return (

            <div >
                <h1>{this.state.count}</h1>
                <Button variant="primary" size="lg" onClick={this.countPushup}>
                    Nose Here
                </Button>

                <Card onClick={this.countPushup}>
                    <Card.Header as="h5">Featured</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>

                    </Card.Body>
                </Card>
            </div>
        );
    }
}
export default PushupCounter;