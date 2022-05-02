import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {

    const [showPass, setShowPass] = useState(false);

    const handleRegister = (e)=>{
        alert()
    };

    const handleEmailChange = (e) =>{
        alert()
    };

    const handlePasswordChange = (e) =>{
        alert()
    };

    const handleConfirmPasswordChange =(e)=>{
        alert()
    };


  return (
    <>
      <div className="page-title shadow">
        <Container className="py-5">
          <Row>
            <h2>Register Here</h2>
            <p>Gregor then turned to look out the window at the weather</p>
          </Row>
        </Container>
      </div>

      <div className="login-bg">
        <Container className="py-5">
          <Row>
            <Col></Col>
            <Col md={4} lg={4} sm={4}>
              <div className="form-bg shadow rounded-3 p-3">
                <h2 className="title text-center my-2">
                  Register <span className="title-2">Form</span>
                </h2>

                <Form onSubmit={handleRegister}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      onChange={handleEmailChange}
                      type="email"
                      placeholder="Enter email"
                      required
                    />
                    {/* {errors?.email && (
                      <p className="error-text">{errors.email}</p>
                    )} */}
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type={showPass ? "text" : "password"}
                      onChange={handlePasswordChange}
                      placeholder="Password"
                    />
                    <p
                      className="absolute top-3 right-5"
                      onClick={() => setShowPass(!showPass)}
                    >
                      🔥
                    </p>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      onChange={handleConfirmPasswordChange}
                      type="password"
                      placeholder="Confirm Password"
                    />
                    {/* {errors?.password && (
                      <p className="error-text">{errors.password}</p>
                    )} */}
                  </Form.Group>

                  <Button type="submit" className="w-100 d-block login-btn">
                    REGISTER
                  </Button>

                  <div className="my-3 d-flex justify-content-center form-bottom-text">
                    <h6 className="text-dark ">
                      Already have an Account?{" "}
                      <Link to="/login"> Please Login!</Link>
                    </h6>
                  </div>
                </Form>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Register