// @ts-nocheck

import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterLogo from "../../../Assets/Images/logo-2.png";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { BsFacebook, BsTwitter, BsGithub } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <>
        {/* footer */}
        <footer id="footer" className="footer py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h3>
                  <img src={FooterLogo} alt="footer-logo" />
                </h3>
                <li>
                  <span>
                    <i className="fa-solid fa-location-dot"></i>
                  </span>
                  84 Main Rd E, St Albans VIC 3021, Australia
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  abc@gmail.com
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  +88 01307-588223
                </li>
                <div className="footer-social-media d-flex">
                  
                  <div className="social-icon d-flex">
                <ul>
                  <li>
                    <BsFacebook className="flex-icon" />
                  </li>
                  <li>
                    <BsTwitter className="flex-icon" />
                  </li>
                  <li>
                    <ImWhatsapp className="flex-icon" />
                  </li>
                  <li>
                    <BsGithub className="flex-icon" />
                  </li>
                </ul>
              </div>
                </div>
              </div>

              <div className="col-md-4">
                <h5>Useful Links</h5>
              </div>

              <div className="col-md-4 categories-menu">
                <h5>Newsletter Signup</h5>
                <p>
                  Subscribe to our newsletter and get 10% off your first
                  purchase
                </p>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Enter your email"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    SUBSCRIBE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </footer>

        {/* footer bottom */}
        <section id="footer-bottom" className="footer-bottom">
          <div className="container">
            <p className="text-center copyright py-3">
              Copyright © 2022 Dev Tabibur all rights reserved.
            </p>
          </div>
        </section>
      </>
    </>
  );
};

export default Footer;
