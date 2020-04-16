import React, {Component, Fragment} from 'react';
import {Container,Row,Col} from "react-bootstrap";

export class BdTopBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="bdTopFixedBanner p-0" >
                    <div className="bdTopBannerOverlay">
                       <Container className="topContent">
                           <Row>
                               <Col className="text-center">
                                    <h1 className="topTitle">Be Safe and Stay Home!!!<span>&nbsp;</span></h1>
                                    <div class="topSubTitle">
                                    <p className="bdTitle" to="/bd-info"><span class="thin">Todays Update of</span><span class="thick"> Bangladesh</span></p>
                                    </div>
                               </Col>
                           </Row>
                       </Container>
                    </div>
                </Container>
            </Fragment>
        )
    }
}

export default BdTopBanner
