import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'

export default class BdAllInfo extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="smTable text-center">
                        <Col>
                            <p className="text-center bdtitle">Showing day by day Cases and Deaths</p>
                        </Col>
                        <Col lg={6} md={6} sm={6}>
                            <table className="table table-sm table-striped text-center mt-4">
                                <thead>
                                    <tr className="thead">
                                        <th>Date</th>
                                        <th>Cases</th>
                                        <th>Deaths</th>
                                    </tr>
                                </thead> 

                                <tbody> 
                                    <tr>
                                        <td>April 22</td>
                                        <td>390</td>
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <td>April 21</td>
                                        <td>434</td>
                                        <td>9</td>
                                    </tr>
                                    <tr>
                                        <td>April 20</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>April 19</td>
                                        <td>312</td>
                                        <td>7</td>
                                    </tr> 
                                    <tr>
                                        <td>April 18</td>
                                        <td>306</td>
                                        <td>9</td>
                                    </tr> 
                                    <tr>
                                        <td>April 17</td>
                                        <td>266</td>
                                        <td>15</td>
                                    </tr>
                                    <tr>
                                        <td>April 16</td>
                                        <td>341</td>
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <td>April 15</td>
                                        <td>219</td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td>April 14</td>
                                        <td>209</td>
                                        <td>7</td>
                                    </tr>
                                    <tr>
                                        <td>April 13</td>
                                        <td>182</td>
                                        <td>5</td>
                                    </tr>
                                    <tr>
                                        <td>April 12</td>
                                        <td>139</td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td>April 11</td>
                                        <td>58</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>April 10</td>
                                        <td>98</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td>April 9</td>
                                        <td>112</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>April 8</td>
                                        <td>54</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>April 7</td>
                                        <td>41</td>
                                        <td>5</td>
                                    </tr>
                                    <tr>
                                        <td>April 6</td>
                                        <td>35</td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td>April 5</td>
                                        <td>18</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>April 4</td>
                                        <td>9</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td>April 3</td>
                                        <td>5</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>April 2</td>
                                        <td>2</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>April 1</td>
                                        <td>3</td>
                                        <td>1</td>
                                    </tr>
                                
                                    <tr>
                                        <td>March 31</td>
                                        <td>2</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>March 30</td>
                                        <td>1</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>March 27</td>
                                        <td>4</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>March 26</td>
                                        <td>5</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>March 25</td>
                                        <td>0</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>March 24</td>
                                        <td>6</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>March 23</td>
                                        <td>6</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>March 22</td>
                                        <td>3</td>
                                        <td>0</td>
                                    </tr>
                                    
                                    <tr>
                                        <td>March 21</td>
                                        <td>7</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>March 20</td>
                                        <td>7</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>March 19</td>
                                        <td>2</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>March 18</td>
                                        <td>0</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>March 17</td>
                                        <td>2</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>March 16</td>
                                        <td>3</td>
                                        <td>0</td>
                                    </tr>      
                                    <tr>
                                        <td>March 15</td>
                                        <td>2</td>
                                        <td>0</td>
                                    </tr> 
                                    <tr>
                                        <td>March 8</td>
                                        <td>3</td>
                                        <td>0</td>
                                    </tr>                              
                                </tbody>      
                            </table>
                        </Col>
                    </Row>

                    <Row className="smTable text-center">
                        <Col>
                            <p className="bdtitle">District-wise Infection</p>
                        </Col>  
                        <Col md={6} lg={6} sm={6}>
                            <Table striped bordered hover size="sm" className="text-center mt-3">
                                <thead className="tableRow">
                                    <tr>
                                        <th>Distric</th>
                                        <th>Infected</th>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    <tr>
                                        <td>Dhaka</td>
                                        <td>843</td>
                                    </tr>
                                    <tr>
                                        <td>Gazipur</td>
                                        <td>82</td>
                                    </tr>
                                    <tr>
                                        <td>Narayangonj</td>
                                        <td>255</td>
                                    </tr>
                                    <tr>
                                        <td>Narsingdi</td>
                                        <td>43</td>
                                    </tr>
                                    <tr>
                                        <td>Kishoreganj</td>
                                        <td>22</td>
                                    </tr>
                                    <tr>
                                        <td>Chittagong</td>
                                        <td>36</td>
                                    </tr>
                                    <tr>
                                        <td>Madaripur</td>
                                        <td>23</td>
                                    </tr>
                                    <tr>
                                        <td>Rangpur</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>Cumilla</td>
                                        <td>14</td>
                                    </tr>
                                    <tr>
                                        <td>Gopalgonj</td>
                                        <td>17</td>
                                    </tr>
                                    <tr>
                                        <td>Gaibandha</td>
                                        <td>13</td>
                                    </tr>
                                    <tr>
                                        <td>Mymensingh</td>
                                        <td>9</td>
                                    </tr>
                                    <tr>
                                        <td>Tangail</td>
                                        <td>9</td>
                                    </tr>
                                    <tr>
                                        <td>Jamalpur</td>
                                        <td>12</td>
                                    </tr>
                                    <tr>
                                        <td>Hobigonj</td>
                                        <td>12</td>
                                    </tr>
                                    <tr>
                                        <td>Rajshahi</td>
                                        <td>8</td>
                                    </tr>
                                    <tr>
                                        <td>Barisal</td>
                                        <td>12</td>
                                    </tr>
                                    <tr>
                                        <td>Rajbari</td>
                                        <td>7</td>
                                    </tr>
                                    <tr>
                                        <td>Pirojpur</td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td>Jhalakathi</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>Borguna</td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td>Lakshmipur</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>MouloviBazar</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td>Sherpur</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>Sylhet</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>Kurigram</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td>Dinajpur</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>ManikGonj</td>
                                        <td>5</td>
                                    </tr>
                                    <tr>
                                        <td>Brahmanbaria</td>
                                        <td>8</td>
                                    </tr>
                                    <tr>
                                        <td>Foridpur</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td>Chandpur</td>
                                        <td>7</td>
                                    </tr>
                                    <tr>
                                        <td>Norail</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Chuadanga</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Khulna</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Potuakhali</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td>Noakhali</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td>Shunamgonj</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Lalmonirhat</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td>Nilphamari</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td>CoxBazar</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Thakurgaon</td>
                                        <td>3</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>    

                    {/* medium device table start */}
                    <Row className="mdLgTable text-center">
                        <Col lg={12} md={12} sm={12} xs={12}>
                        <p className="text-center bdtitle">Showing day by day Cases and Deaths</p>
                        </Col> 
                       
                        <Col lg={6} md={6} sm={6}>
                            <table className="table table-sm table-striped text-center mt-4">
                            <thead>
                                <tr className="thead">
                                    <th>Date</th>
                                    <th>Cases</th>
                                    <th>Deaths</th>
                                </tr>
                            </thead> 

                            <tbody>   
                                 <tr>
                                    <td>April 22</td>
                                    <td>390</td>
                                    <td>10</td>
                                 </tr>
                                 <tr>
                                    <td>April 21</td>
                                    <td>434</td>
                                    <td>9</td>
                                </tr>
                                <tr>
                                    <td>April 17</td>
                                    <td>266</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <td>April 16</td>
                                    <td>341</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>April 14</td>
                                    <td>209</td>
                                    <td>7</td>
                                </tr>
                                <tr>
                                    <td>April 12</td>
                                    <td>139</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>April 10</td>
                                    <td>98</td>
                                    <td>6</td>
                                </tr>
                                <tr>
                                    <td>April 8</td>
                                    <td>54</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>April 6</td>
                                    <td>35</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>April 4</td>
                                    <td>9</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>April 2</td>
                                    <td>2</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>March 31</td>
                                    <td>2</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>March 27</td>
                                    <td>4</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>March 24</td>
                                    <td>6</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>March 22</td>
                                    <td>3</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>March 20</td>
                                    <td>7</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>March 18</td>
                                    <td>0</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>March 16</td>
                                    <td>3</td>
                                    <td>0</td>
                                </tr>      
                                <tr>
                                    <td>March 8</td>
                                    <td>3</td>
                                    <td>0</td>
                                </tr>
                            </tbody>      
                            </table>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6}>
                            <table className="table table-sm table-striped text-center mt-4">
                            <thead>   
                                <tr className="thead">
                                    <th>Date</th>
                                    <th>Cases</th>
                                    <th>Deaths</th>
                                </tr>
                            </thead>  

                            <tbody>
                                <tr>
                                   <td>April 23</td>
                                   <td>414</td>
                                   <td>7</td>
                                </tr>
                                <tr>
                                   <td>April 19</td>
                                   <td>312</td>
                                   <td>7</td>
                                </tr> 
                                <tr>
                                    <td>April 18</td>
                                    <td>306</td>
                                    <td>9</td>
                                </tr> 
                                <tr>
                                    <td>April 15</td>
                                    <td>219</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>April 13</td>
                                    <td>182</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>April 11</td>
                                    <td>58</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>April 9</td>
                                    <td>112</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>April 7</td>
                                    <td>41</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>April 5</td>
                                    <td>18</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>April 3</td>
                                    <td>5</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>April 1</td>
                                    <td>3</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>March 30</td>
                                    <td>1</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>March 26</td>
                                    <td>5</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>March 25</td>
                                    <td>0</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>March 23</td>
                                    <td>6</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>March 21</td>
                                    <td>7</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>March 19</td>
                                    <td>2</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>March 17</td>
                                    <td>2</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>March 15</td>
                                    <td>2</td>
                                    <td>0</td>
                                </tr> 
                            </tbody>   
                          </table>                    
                        </Col>
                    </Row>

                    {/* medium and large device table */}
                    <Row className="mdLgTable text-center">
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <p className="bdtitle">District-wise Infection</p>
                        </Col>
                        
                        <Col md={6} lg={6} sm={6}>
                            <Table striped bordered hover size="sm" className="text-center mt-3">
                                <thead className="tableRow">
                                    <tr>
                                        <th>Distric</th>
                                        <th>Infected</th>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    <tr>
                                        <td>Dhaka</td>
                                        <td>843</td>
                                    </tr>
                                    <tr>
                                        <td>Gazipur</td>
                                        <td>82</td>
                                    </tr>
                                    <tr>
                                        <td>Narayangonj</td>
                                        <td>255</td>
                                    </tr>
                                    <tr>
                                        <td>Tangail</td>
                                        <td>9</td>
                                    </tr>
                                    <tr>
                                        <td>Rajbari</td>
                                        <td>7</td>
                                    </tr>
                                    <tr>
                                        <td>Rangpur</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>Gopalgonj</td>
                                        <td>17</td>
                                    </tr>
                                    <tr>
                                        <td>Gaibandha</td>
                                        <td>13</td>
                                    </tr>
                                    <tr>
                                        <td>Mymensingh</td>
                                        <td>9</td>
                                    </tr>
                                    <tr>
                                        <td>Sherpur</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>Rajshahi</td>
                                        <td>8</td>
                                    </tr>
                                    <tr>
                                        <td>Chittagong</td>
                                        <td>36</td>
                                    </tr>
                                    <tr>
                                        <td>Pirojpur</td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td>Jhalakathi</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>Borguna</td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td>Lakshmipur</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>MouloviBazar</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td>Sylhet</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>Kurigram</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td>Dinajpur</td>
                                        <td>3</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>

                        <Col md={6} lg={6} sm={6}>
                            <Table striped bordered hover size="sm" className="text-center mt-3">
                                <thead className="tableRow">
                                    <tr>
                                        <th>Distric</th>
                                        <th>Infected</th>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    <tr>
                                        <td>Narsingdi</td>
                                        <td>43</td>
                                    </tr>
                                    <tr>
                                        <td>Kishoreganj</td>
                                        <td>22</td>
                                    </tr>
                                    <tr>
                                        <td>ManikGonj</td>
                                        <td>5</td>
                                    </tr>
                                    <tr>
                                        <td>Brahmanbaria</td>
                                        <td>8</td>
                                    </tr>
                                    <tr>
                                        <td>Cumilla</td>
                                        <td>14</td>
                                    </tr>
                                    <tr>
                                        <td>Foridpur</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td>Madaripur</td>
                                        <td>23</td>
                                    </tr>
                                    <tr>
                                        <td>Chandpur</td>
                                        <td>7</td>
                                    </tr>
                                    <tr>
                                        <td>Norail</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Jamalpur</td>
                                        <td>12</td>
                                    </tr>
                                    <tr>
                                        <td>Hobigonj</td>
                                        <td>12</td>
                                    </tr>
                                    <tr>
                                        <td>Chuadanga</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Khulna</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Barisal</td>
                                        <td>12</td>
                                    </tr>
                                    <tr>
                                        <td>Potuakhali</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td>Noakhali</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td>Shunamgonj</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Lalmonirhat</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td>Nilphamari</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td>CoxBazar</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Thakurgaon</td>
                                        <td>3</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <p>Source:<a href="https://corona.gov.bd/" target="_blank"> corona.gov.bd</a></p>
                </Container>
            </Fragment>
        )
    }
}
