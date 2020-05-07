import React, { Component, Fragment } from 'react'
import { Container } from 'react-bootstrap'

export class Footer extends Component {
    render() {
        return (
            <Fragment>
               <Container fluid={true} className="text-center copyRightSection">
                    <p>© <a href="https://smdurjoy.netlify.app" target="_blank">smdurJoy</a></p>
                </Container> 
            </Fragment>
        )
    }
}

export default Footer
