import React, { Component, Fragment } from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import BdDetails from '../components/BdDetails/BdDetails';
import BdTopBanner from '../components/BdTopBanner/BdTopBanner';
import Footer from '../components/Footer/Footer';

class HomePage extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }
    
    render() {
        return(
           <Fragment>
                <TopNavigation />
                <BdTopBanner />
                <BdDetails />
                <Footer />
           </Fragment>
        );
    }
}

export default HomePage;