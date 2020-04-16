import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import coronaImg from '../../asset/image/corona.jpg'
import coronaImg2 from '../../asset/image/corona2.jpg'

export class AboutCorona extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col md={4} sm={12} lg={4}>
                           <img src={coronaImg} className="coronaImg"></img>
                           <img src={coronaImg2} className="coronaImg2"></img>
                        </Col>

                        <Col md={8} sm={12} lg={8} className="informations aboutTop">
                            <h2 className="bdInfo mdbdInfo">COVID-19</h2>
                            <hr/>
                            <p className="ml-2">COVID-19 is the disease caused by the new coronavirus that emerged in China in December 2019. Its symptoms include cough, fever, shortness of breath, muscle aches, sore throat, unexplained loss of taste or smell, diarrhea and headache. COVID-19 can be severe, and some cases have caused death.</p>

                            <p className="ml-2"> The new coronavirus can be spread from person to person. It is diagnosed with a laboratory test. There is no coronavirus vaccine yet. Prevention involves frequent hand-washing, coughing into the bend of your elbow, staying home when you are sick and wearing a cloth face covering if you can't practice social distancing.</p>

                            <p className="ml-2">Coronaviruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused a recent outbreak of respiratory illness now called COVID-19.</p>
                        </Col>
                    </Row>

                    <Row className="mt-4">
                        <Col className="informations" md={12} sm={12} lg={12}>
                            <h3 className="infoTitle smTitle">WHO IS AT A HIGHER RISK?</h3>
                            <p>According to the CDC, early information shows that some people are at <a href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-at-higher-risk.html" target="_blank">higher risk</a> of getting very sick from COVID-19. This includes older adults and people of any age who:</p>
                            <ol>
                                <li><b>Have serious underlying medical conditions,</b> such as heart, lung or liver disease; diabetes; moderate to severe asthma; severe obesity; and renal failure.</li>

                                <li><b>Have a weakened immune system,</b> including those undergoing cancer treatment.</li>

                                <li><b>People who are pregnant</b> should also be monitored since they are known to be at risk with severe viral illness; however, to date data on COVID-19 has not shown increased risk. If you are at higher risk for serious illness from COVID-19, it is critical for you to take actions to avoid getting sick.</li>

                                <li><b>Stay home, avoid close contact</b> with others and follow the other steps above.</li>

                                <li><b>Call your health care provider if you have concerns</b>or to ask about obtaining extra necessary medications in case you need to stay home for a prolonged period of time.</li>

                                <li><b>Call a medical professional as soon as COVID-19 symptoms start,</b> if you are at higher risk.</li>
                            </ol>

                            <h3 className="peraGape infoTitle">IF YOU ARE SICK</h3>
                            <p>According to the CDC, COVID-19 symptoms include fever, shortness of breath and a cough. Keep track of your symptoms, which may appear two to 14 days after exposure, and call to seek medical attention if your symptoms worsen, such as difficulty breathing.</p>
                            <h3 className="infoTitle">Mild Illness</h3>
                            <p>Most people have mild illness and are able to recover at home. If you think you are sick:</p>
                            <ol>
                                <li><b>Stay home and call your doctor</b> for medical advice if you think you have been exposed to COVID-19 and develop symptoms. Older adults and people of any age with serious underlying medical conditions should call a health care provider as soon as symptoms start.</li>

                                <li><b>Separate yourself from other people</b>  in your home. On your own, clean and disinfect all surfaces daily and high-touch surfaces frequently throughout the day in your sick room and designated bathroom. Have a healthy household member do the same for surfaces in other parts of the home.</li>

                                <li><b>Wear a <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/diy-cloth-face-coverings.html" target="_blank"></a> cloth face cover</b>if you are around other people (e.g., sharing a room or vehicle) and before you enter a health care provider’s office. See <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html" target="_blank">CDC guidelines</a>.</li>
                            </ol>

                            <h3 className="peraGape infoTitle">Emergency Warning Signs</h3>
                            <p>If your symptoms become severe, call to get medical attention immediately. Warning signs include:</p>
                            <ol>
                                <li>Trouble breathing</li>
                                <li>Persistent pain or pressure in the chest</li>
                                <li>New confusion or inability to arouse</li>
                                <li>Bluish lips or face</li>
                            </ol>
                            <p>This list is not all inclusive. Consult your medical provider for any other symptoms that are severe or concerning. Review <a href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html" targer="_blank">CDC guidance</a> for more information.</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default AboutCorona
