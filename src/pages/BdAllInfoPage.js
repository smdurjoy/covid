import React, { Component, Fragment } from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/Footer/Footer';
import TopBanner from '../components/TopBanner/TopBanner';
import BdAllInfo from '../components/BdAllInfo/BdAllInfo';

class BdAllInfoPage extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }
    
    render() {
        return(
           <Fragment>
                <TopNavigation />
                <TopBanner pageTitle="Details Information Of Bangladesh"/>
                <BdAllInfo />
                <Footer />
           </Fragment>
        );
    }
}

export default BdAllInfoPage;