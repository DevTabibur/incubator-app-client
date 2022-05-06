import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./GoogleMap.css";

const GoogleMap = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <div className="google-map-parent d-flex justify-content-center align-items-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.700020372367!2d90.40318141481613!3d23.793694284567923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77ded2a2369%3A0xebaef2adc463beb0!2sProgramming%20Hero!5e0!3m2!1sen!2sbd!4v1650293576012!5m2!1sen!2sbd"
                width="1400"
                height="200"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
        </Row>
      </Container>
    </>
  );
};

export default GoogleMap;