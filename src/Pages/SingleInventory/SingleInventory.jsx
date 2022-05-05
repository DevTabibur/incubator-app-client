// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./SingleInventory.css";

const SingleInventory = () => {
  const { id } = useParams();

  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/data/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, []);

  const handleDelivered = (id) =>{

      // const updateQuantity = req.body.quantity;

    // for getting id's info
    const url = `http://localhost:5000/data/${id}`;
    // const [ info, setInfo] = useState({});

    // fetch(url, {
    //   method: "PUT",
    //   headers : {
    //     'content-type' : 'application/json'
    //   },
    //   body: JSON.stringify()
    // })
  }

  return (
    <div className="single-product-details">
      <h2 className="mx-auto w-50 text-center my-4">Single Product Details: </h2>
      <Container>
        <Row>

          <Col md={6} lg={6} sm={12}>
            <div className="product-img">
              <img  className='d-flex justify-content-center align-items-center' src={singleProduct.image} alt="product__img" />
            </div>
          </Col>

          <Col md={6} lg={6} sm={12} className='d-flex justify-content-center align-items-center'>
            <div className="product-info">
              <h2>{singleProduct.name}</h2>
              <h3>${singleProduct.price}</h3>
              <p>{singleProduct.description}</p>
              <h5>Quantity: {singleProduct.quantity}</h5>
              <h5>Supplier: {singleProduct.supplier}</h5>
              <button className="delivered-btn" onClick={()=> handleDelivered(singleProduct._id)}>DELIVERED</button>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
};



export default SingleInventory;
