import React, { Component, Fragment } from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import TopBanner from '../components/TopBanner/TopBanner';
import CovidInfo from '../components/CovidInfo/CovidInfo';
import Footer from '../components/Footer/Footer';

class HomePage extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }
    
    render() {
        return(
           <Fragment>
                <TopNavigation />
                <TopBanner />
                <CovidInfo />
                <Footer />
           </Fragment>
        );
    }
}

export default HomePage;