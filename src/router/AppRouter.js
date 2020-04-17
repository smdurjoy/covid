import React, { Component, Fragment } from 'react';
import { Switch, Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import BdInfoPage from "../pages/BdInfoPage";
import AboutCoronaPage from "../pages/AboutCoronaPage";
import ImpContactPage from "../pages/ImpContactPage";
import BdAllInfoPage from "../pages/BdAllInfoPage";

class AppRouter extends Component {
    render() {
        return(
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/bd-info" component={BdInfoPage}/>
                    <Route exact path="/BdAllInfo" component={BdAllInfoPage}/>
                    <Route exact path="/AboutCorona" component={AboutCoronaPage}/>
                    <Route exact path="/ImpContacts" component={ImpContactPage}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRouter;