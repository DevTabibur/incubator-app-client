import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Service.css";
import {ImBullhorn} from 'react-icons/im';
import {BiSupport} from 'react-icons/bi';
import {AiOutlineAntDesign} from 'react-icons/ai';
import {MdOutlineFeaturedPlayList} from 'react-icons/md';

const Service = () => {
  return (
    <>
      <Container className="py-4 mb-4">
        <div className="section-title mb-4">
          <h2>The hardest part of starting up is starting out</h2>
          <p className="mb-0">Surrounded by smart, passionate people and with the best tools and approaches at your disposal, you’ll take giant leaps toward creating a business, becoming a founder and connecting.</p>
        </div>
        <Row className="g-4">
            <Col md={3} sm={12} lg={3}>
                    <div className="box">
                        <div className="icon-box my-3">
                            <ImBullhorn className="service-icon"/>
                        </div>
                        <div className="box-info">
                            <h3 className="box-heading">Guarantee</h3>
                            <p>We are providing you 1 year guarantee with best support</p>
                        </div>
                    </div>
            </Col>

            <Col md={3} sm={12} lg={3}>
            <div className="box">
                        <div className="icon-box my-3">
                            <BiSupport className="service-icon"></BiSupport>
                        </div>
                        <div className="box-info">
                            <h3 className="box-heading">Support</h3>
                            <p>We are providing you 24/7 best support</p>
                        </div>
                    </div>
            </Col>

            <Col md={3} sm={12} lg={3}>
            <div className="box">
                        <div className="icon-box my-3">
                            <AiOutlineAntDesign className="service-icon"></AiOutlineAntDesign>
                        </div>
                        <div className="box-info">
                            <h3 className="box-heading">Design</h3>
                            <p>Our Products has a lot of design and development functionality</p>
                        </div>
                    </div>
            </Col>

            <Col md={3} sm={12} lg={3}>
            <div className="box">
                        <div className="icon-box my-3">
                            <MdOutlineFeaturedPlayList className="service-icon"></MdOutlineFeaturedPlayList>
                        </div>
                        <div className="box-info">
                            <h3 className="box-heading">Features</h3>
                            <p>This Products has another modern level of features.</p>
                        </div>
                    </div>
            </Col>

        </Row>
      </Container>
    </>
  );
};

export default Service;
