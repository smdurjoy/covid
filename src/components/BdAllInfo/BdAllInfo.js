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
                                        <td>May 6</td>
                                        <td>790</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>May 5</td>
                                        <td>786</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>May 4</td>
                                        <td>688</td>
                                        <td>5</td>
                                    </tr>
                                    <tr>
                                        <td>May 3</td>
                                        <td>665</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td>May 2</td>
                                        <td>552</td>
                                        <td>5</td>
                                    </tr>
                                    <tr>
                                        <td>May 1</td>
                                        <td>571</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td>April 30</td>
                                        <td>564</td>
                                        <td>5</td>
                                    </tr>
                                    <tr>
                                        <td>April 29</td>
                                        <td>641</td>
                                        <td>8</td>
                                    </tr>
                                    <tr>
                                        <td>April 28</td>
                                        <td>549</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>April 27</td>
                                        <td>497</td>
                                        <td>7</td>
                                    </tr>
                                    <tr>
                                        <td>April 26</td>
                                        <td>418</td>
                                        <td>5</td>
                                    </tr>
                                    <tr>
                                        <td>April 25</td>
                                        <td>309</td>
                                        <td>9</td>
                                    </tr>
                                    <tr>
                                        <td>April 24</td>
                                        <td>503</td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td>April 23</td>
                                        <td>414</td>
                                        <td>7</td>
                                    </tr>
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
                                        <td>492</td>
                                        <td>10</td>
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
                                   <td>May 6</td>
                                   <td>790</td>
                                   <td>3</td>
                                 </tr>
                                 <tr>
                                    <td>May 4</td>
                                    <td>688</td>
                                    <td>5</td>
                                 </tr>
                                 <tr>
                                    <td>May 2</td>
                                    <td>552</td>
                                    <td>5</td>
                                 </tr>
                                 <tr>
                                    <td>April 30</td>
                                    <td>564</td>
                                    <td>5</td>
                                 </tr>
                                 <tr>
                                    <td>April 28</td>
                                    <td>549</td>
                                    <td>3</td>
                                 </tr>
                                 <tr>
                                    <td>April 26</td>
                                    <td>418</td>
                                    <td>5</td>
                                 </tr>
                                 <tr>
                                    <td>April 24</td>
                                    <td>503</td>
                                    <td>4</td>
                                 </tr>  
                                 <tr>
                                    <td>April 22</td>
                                    <td>390</td>
                                    <td>10</td>
                                 </tr>
                                <tr>
                                   <td>April 20</td>
                                   <td>492</td>
                                   <td>10</td>
                                </tr>
                                <tr>
                                    <td>April 18</td>
                                    <td>306</td>
                                    <td>9</td>
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
                                   <td>May 5</td>
                                   <td>786</td>
                                   <td>1</td>
                                </tr>                                   
                                <tr>
                                   <td>May 3</td>
                                   <td>665</td>
                                   <td>2</td>
                                </tr>                                  
                                <tr>
                                   <td>May 1</td>
                                   <td>571</td>
                                   <td>2</td>
                                </tr>
                                <tr>
                                    <td>April 29</td>
                                    <td>641</td>
                                    <td>8</td>
                                </tr>
                                <tr>
                                   <td>April 27</td>
                                   <td>497</td>
                                   <td>7</td>
                                </tr>
                                <tr>
                                   <td>April 25</td>
                                   <td>309</td>
                                   <td>9</td>
                                </tr>
                                <tr>
                                   <td>April 23</td>
                                   <td>414</td>
                                   <td>7</td>
                                </tr>
                                <tr>
                                    <td>April 21</td>
                                    <td>434</td>
                                    <td>9</td>
                                </tr>
                                <tr>
                                   <td>April 19</td>
                                   <td>312</td>
                                   <td>7</td>
                                </tr> 
                               
                                <tr>
                                    <td>April 17</td>
                                    <td>266</td>
                                    <td>15</td>
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
                </Container>
            </Fragment>
        )
    }
}
