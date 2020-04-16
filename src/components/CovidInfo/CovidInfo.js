import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RestClint from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import WentWrong from '../WentWrong/WentWrong';

class CovidInfo extends Component {
    constructor() {
        super();
        this.state = {
           data: [],
           search: "",
           loading: false,
           error: false,
    }
}

    componentDidMount() {
        RestClint.GetRequest(AppUrl.allData).then(result=>{
            if( result == null ) {
                this.setState({error:true})
            }
            else {
                this.setState({data:result})
                // this.setState({bd:result['83']})
            }
        }).catch(error=>{
            this.setState({error:true})
        })
    }

    
    onchange = e => {
        this.setState({ search: e.target.value })
    }

    render() {
        if( this.state.error == true ) {
            return <WentWrong/>
        }
        else {
            const { search } = this.state;
            const { data } = this.state;

            const myView = data.map(list=>{
                if( search !== "" &&  list.country.toLowerCase().indexOf(search.toLowerCase()) === -1 ) {
                    return null;
                }
                return <tbody>
                        <tr><td></td></tr>
                        <tr>
                            <td>{list.country}</td>
                            <td>{list.cases}</td>
                            <td>{list.todayCases}</td>
                            <td>{list.deaths}</td>
                            <td>{list.todayDeaths}</td>
                            <td>{list.recovered}</td>
                            <td>{list.critical}</td>
                        </tr>
                    </tbody>
            })    
            return (
                <Fragment>
                    <Container className="text-center">
                        <h1 className="serviceMainTitle">COVID-19 Latest Updates</h1>
                        <Row>  
                            <Col lg={12} md={12} sm={12}>
                                <input className="form-control filter mb-3" lable="search" placeholder="Search by Country Name" onChange = {this.onchange} />
                                <table className="table table-sm homeTable">
                                    <thead>
                                        <tr className="tHead">
                                            <th scope="col">Country</th>
                                            <th scope="col">Cases</th>
                                            <th scope="col">TodayCases</th>
                                            <th scope="col">Deaths</th>
                                            <th scope="col">TodayDeaths</th>
                                            <th scope="col">Recovered</th>
                                            <th scope="col">Critical</th>
                                        </tr>
                                    </thead>
                                    {myView}
                                </table>
                            </Col>

                            <Col>
                                <ul>
                                    
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>              
            );
        }
      
    }
}

export default CovidInfo;