import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


class EquineProfile extends Component {
    
    constructor(props) {
        super(props);
        console.log(props);
    }
    
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        
                            <h1>
                                Equine Name
                            </h1>
                            
                        </Col>
                </Row>
                
            </Container>  
        );
    }
}



    export default EquineProfile 