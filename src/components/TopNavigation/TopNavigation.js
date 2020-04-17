import React, {Component,Fragment} from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import whiteLogo from '../../asset/image/navlogo.svg'
import blueLogo from '../../asset/image/navlogoScroll.svg'
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'
import '../../asset/css/responsive.css'
import {NavLink} from "react-router-dom";

class TopNavigation extends Component {
    constructor(props){
        super(props);
        this.state={
            navBarTitle:"navTitle",
            navBarLogo:[whiteLogo],
            navBarBack:"navBackground",
            navBarItem:"navItem",
            navVarient: "dark",
            pageTitle: props.title
        }
    }
    onScroll = () => {
        if(window.scrollY>100) {
            this.setState( {navBarTitle:'navTitleScroll', navBarLogo:[blueLogo], navBarBack:'navBackgroundScroll', navBarItem:'navItemScroll', navVarient:'light'} );
        }
        else {
            this.setState( {navBarTitle:'navTitle', navBarLogo:[whiteLogo], navBarBack:'navBackground', navBarItem:'navItem', navVarient:'dark'} );
        }
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
    }
    render() {
        return(
            <Fragment>
                <title>{this.state.pageTitle}</title>
                <Navbar variant={this.state.navVarient} className={this.state.navBarBack} fixed="top" collapseOnSelect expand="lg">
                    <Navbar.Brand> <NavLink className={this.state.navBarTitle} to="/"><img src={this.state.navBarLogo} alt="navLogo" className="topName"/> Coronavirus</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navToggler"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00A8EE'}} className={this.state.navBarItem} to="/">Home</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00A8EE'}} className={this.state.navBarItem} to="BdAllInfo">BdDetails</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00A8EE'}} className={this.state.navBarItem} to="AboutCorona">AboutCorona</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00A8EE'}} className={this.state.navBarItem} to="ImpContacts" >ImpContacts</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}
export default TopNavigation;