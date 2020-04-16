import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Loading from "../../asset/images/loader.svg";

class loading extends Component {
    render() {
        return(
            <Fragment>
                <Container className="text-center">
                    <Row>
                        <Col>
                            <img className="loaderAnimation" src={Loading}/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default loading;