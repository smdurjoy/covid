import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export class ImpContacts extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col className="informations">
                        <p className="bdInfo mdHotline">Hotlines</p>
                        <hr/>
                        <h3 className="peraGape mb-4 infoTitle">CORONA RELATED IMPORTANT CONTACTS</h3>
                            <p><b>National Call Center:</b> 333</p>
                            <p><b>Health Center DGHS:</b> 16263</p>
                            <p><b>IEDCR:</b> 10655</p>
                            <p><b>IEDCR adds more hotline numbers for corona:</b> 01937000011, 01937110011, 01927711785, 01927711784, 01401184568, 01401184563, 01401184560, 01401184559, 01401184556, 01401184555, 01401184554, 01401184551</p>
                            <p><b>Health Line:</b> 09611677777</p>
                            <p><b>National Helpline:</b> 109</p>
                        <hr className="mt-5"/>
                        <h3 className="peraGape infoTitle mb-4">MEDICALS</h3>  
                            <p><b>Rangpur Medical College:</b> 02-55165001</p> 
                            <p><b>Dhaka Medical College:</b> 052163630</p>   
                            <p><b>Rajshahi Medical College:</b> 0721-772150</p>   
                            <p><b>Khulna Medical College:</b> 041-761535</p>   
                            <p><b>Sher-E-Bangla Medical College Hospital, Barisal:</b> 0431-2173547</p>   
                            <p><b>Chittagong Medical College:</b> 01819-637685</p>   
                            <p><b>Mymensingh Medical College:</b> 01768-027115</p>  
                        <hr className="mt-5"/>   
                        <h3 className="peraGape infoTitle mb-4">MORE HOSPITALS</h3>  
                            <p><b>Kuwait Bangladesh Friendship Government Hospital:</b> 01999-956290</p> 
                            <p><b>Sheikh Russel Gastro Liver Institute & Hospital:</b> 01819221115</p>   
                            <p><b>Kurmitola General Hospital:</b> +8802 55062350</p>   
                            <p><b>Dhaka Shishu Hospital:</b> 880-2-9128308</p> 
                        <hr className="mt-5 mb-5"/>  
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default ImpContacts
