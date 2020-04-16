import React, { Component, Fragment } from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/Footer/Footer';
import TopBanner from '../components/TopBanner/TopBanner';
import AboutCorona from '../components/AboutCorona/AboutCorona';

class AboutCoronaPage extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }
    
    render() {
        return(
           <Fragment>
                <TopNavigation />
                <TopBanner pageTitle="About Corona"/>
                <AboutCorona />
                <Footer />
           </Fragment>
        );
    }
}

export default AboutCoronaPage;