import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import RestClint from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import {Link} from "react-router-dom";

export class BdDetails extends Component {
    constructor() {
        super();
        this.state = {
            bdData: [],
            error: false,
            bd: []
        }
    }

    componentDidMount() {
        RestClint.GetRequest(AppUrl.allData).then(result=>{
            if( result == null ) {
                return this.setState({error: true})
            }
            else {
                this.setState({bdData:result})
            }
        }).catch(error=>{
            this.setState({error:true})
        })
    }

    componentDidUpdate() {
        RestClint.GetRequest(AppUrl.allData).then(result=>{
            if( result == null ) {
                return this.setState({error: true})
            }
            else {
                this.setState({bd:result.find( ({ country }) => country === 'Bangladesh' )})
            }
        }).catch(error=>{
            this.setState({error:true})
        })
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="bdInfoTRow">
                        <Col lg={6} md={6} sm={6}>
                        <div class="center">
                            <div class="flag-container">
                                <span class="pole"></span>
                                <span class="knob"></span>
                                <span class="flag front">
                                <span class="rating">Information of</span>
                                </span>
                                <span class="flag back"> <span>Bangladesh</span> <span class="shadow"></span>
                                </span>
                            </div>
                        </div>
                        </Col>

                        <Col lg={6} md={6} sm={6}>
                        <p className="bdInfo smbdInfo">Latest Informations</p>
                        <table className="table table-borderd text-center">
                            <tr>
                                <th scope="col">TotalCases</th>
                                <th scope="col">TodayCases</th>
                                <th scope="col">Deaths</th>
                                <th scope="col">TodayDeaths</th>
                                <th scope="col">Recovered</th>
                                <th scope="col">Critical</th>
                            </tr>

                            <tr>
                                <td>{this.state.bd.cases}</td>
                                <td>{this.state.bd.todayCases}</td>
                                <td>{this.state.bd.deaths}</td>
                                <td>{this.state.bd.todayDeaths}</td>
                                <td>{this.state.bd.recovered}</td>
                                <td>{this.state.bd.critical}</td>
                            </tr>
                        </table>    

                        <table className="table table-borderd text-center">
                            <tr>
                                <th scope="col" rowSpan="2">Yesterday:</th>
                                <th scope="col">TotalCases</th>
                                <th scope="col">TotalDeaths</th>
                            </tr>  
                            <tr>
                                <td scope="col">312</td>
                                <td scope="col">7</td>
                            </tr>
                            <tr>
                            <Link  className="bdlink" to="/BdAllInfo"><span class="thin">More</span><span class="thick"> Info</span></Link>
                            </tr>
                        </table>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col className="informations mb-5">
                            <h2 className="infoTitle">HELP SLOW THE SPREAD OF COVID-19</h2>
                            <p>Follow these steps to help keep you and others safe:</p>
                            <ol>
                                <li><b>Stay home</b> if you can and avoid any non-essential travel. Avoid social gatherings of more than 10 people.</li>

                                <li><b>Practice social distancing</b> by keeping at least 6 feet — about two arm lengths — away from others if you must go out in public. Stay connected with loved ones through video and phone calls, texts and social media. Avoid close contact with people who are sick.</li>

                                <li><b>Wash your hands often</b> with soap and water for at least 20 seconds, especially after being in a public place, or after blowing your nose, coughing or sneezing. If soap and water are not readily available, use a hand sanitizer with at least 60% alcohol.</li>

                                <li><b>Avoid touching your eyes, nose and mouth</b> with unwashed hands.</li>

                                <li><b>Clean and disinfect household surfaces</b> daily and high-touch surfaces frequently throughout the day. High-touch surfaces include phones, remote controls, counters, tabletops, doorknobs, bathroom fixtures, toilets, keyboards, tablets and bedside tables. Follow <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/cleaning-disinfection.html" target="_blank"></a>CDC guidance.</li>

                                <li><b>Cover your coughs and sneezes.</b> Use a tissue to cover your nose and mouth, and throw used tissues in a lined trash can. If a tissue isn’t available, cough or sneeze into your elbow — not your hands. Wash your hands immediately.</li>
                            </ol>
                            <hr className="mt-5 mb-3"/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default BdDetails
