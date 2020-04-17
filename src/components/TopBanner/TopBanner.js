import React, {Component, Fragment} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import { Link } from 'react-router-dom';
class TopBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedBanner p-0" >
                    <div className="topBannerOverlay">
                       <Container className="topContent"> 
                           <Row>
                               <Col className="text-center">
                                    <h1 className="topTitle">Be Safe and Stay Home!!!<span>&nbsp;</span></h1>
                                    <div class="topSubTitle">
                                    <Link  className="bdlink" to="/bd-info"><span class="thin">See Latest Updates of</span><span class="thick"> Bangladesh</span></Link>
                                    </div>
                                    <p className="bdTitle"><span class="thik">{this.props.pageTitle}</span></p>
                               </Col>
                           </Row>
                       </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}
export default TopBanner;