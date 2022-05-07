// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Col, Container, Placeholder, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./SingleInventory.css";
import { useForm } from "react-hook-form";

const SingleInventory = () => {
  const { id } = useParams();

  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/data/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, []);

  const handleDelivered = (id) => {
    const quantity = singleProduct.quantity;
    if (quantity > 0) {
      const quantityObj = { quantity };
      const url = `http://localhost:5000/data/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(quantityObj),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.success("item restock successfully");
        });
    } else {
      toast.error("Stock out");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const quantity = e.target.quantity.value;
    console.log(quantity);
  };

  return (
    <>
      <div className="single-product-details py-5">
        <h2 className="mx-auto w-50 text-center my-4"> </h2>
        <Container>
          <div className="section-title mb-4">
            <h2>{singleProduct.name}</h2>
            <p className="mb-0">{singleProduct.name} details here.</p>
          </div>
          <Row>
            <Col md={6} lg={6} sm={12} className="left-column">
              <div className="product-img d-flex justify-content-center align-items-center">
                <img
                  className="w-75 rounded"
                  src={singleProduct.image}
                  alt="product__img"
                />
              </div>
            </Col>

            <Col
              md={6}
              lg={6}
              sm={12}
              className="d-flex justify-content-center align-items-center right-column"
            >
              <div className="product-info">
                <h2>{singleProduct.name}</h2>
                <h3>${singleProduct.price}</h3>
                <h5>Quantity: {singleProduct.quantity}</h5>
                <h5>Supplier: {singleProduct.supplier}</h5>
                <p>{singleProduct.description}</p>

                <button
                  className="delivered-btn"
                  onClick={() => handleDelivered(singleProduct._id)}
                >
                  DELIVERED
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-2 my-5">
        <div className="section-title mb-4">
          <h2>Restock the item?</h2>
          <p className="mb-0">here you can restock the item.</p>
        </div>
        <Row>
        <Col></Col>

          <Col md={7} lg={7} sm={12}>
            <div className="restock-form d-block text-center">
              <form onSubmit={handleSubmit}>
                <label className="d-block level mb-3"><h4>Add Quantity</h4></label>
                <input
                  type="number"
                  name="quantity"
                  placeholder="Type Add Quantity" className="me-3 input"
                />
                <input type="submit" className="submit-btn" />
              </form>
            </div>
          </Col>

        <Col></Col>


        </Row>
      </Container>
    </>
  );
};

export default SingleInventory;
