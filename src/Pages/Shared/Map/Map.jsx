import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Map = () => {
  return (
    <>
        <Container>
            <Row>
                <Col>
                    <div className="google-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.700020372367!2d90.40318141481613!3d23.793694284567923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77ded2a2369%3A0xebaef2adc463beb0!2sProgramming%20Hero!5e0!3m2!1sen!2sbd!4v1651811808077!5m2!1sen!2sbd" width="600" height="450"   loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Map