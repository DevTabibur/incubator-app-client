// @ts-nocheck
import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Placeholder, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./SingleInventory.css";
import { useForm } from "react-hook-form";
import { ProductContext } from "../../App";
import useSingleProduct from "../Hooks/useSingleProduct";

const SingleInventory = () => {
  const { id } = useParams();

  const [products, setProducts] = useContext(ProductContext);

  const [singleProduct, setSingleProduct] = useSingleProduct(id);

  const handleDelivered = (id) => {
    const quantity = singleProduct.quantity;

    if (quantity > 0) {
      const quantityObj = { quantity };

      const url = `http://localhost:5000/delivery/${id}`;

      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(quantityObj),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("item restock successfully", {toastId: "Sucess"});
        });
    } else {
      toast.error("Stock out", {toastId:"stock out"});
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const addedQuantity = e.target.formQuantity.value;

    const olderQuantity = singleProduct.quantity;

    if (!addedQuantity || addedQuantity < 0) {
      toast.error("Please restock the items");
    } else {
      const newQuantity = parseInt(addedQuantity) + parseInt(olderQuantity);

      const newQuantityObj = { newQuantity };
      const url = `http://localhost:5000/data/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newQuantityObj),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Item restock successfully");
        });
      e.target.reset();
    }
  };

  return (
    <>
      <div className="single-product-details py-5">
        <h2 className="mx-auto w-50 text-center my-4"> </h2>
        <Container>
          <ToastContainer />
          <div className="section-title mb-4">
          
            <h2>{singleProduct?.name}</h2>
            <h5 className="mb-0">Product ID: {singleProduct?._id} details here.</h5>
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
                <h5>Sold: {singleProduct.sold}</h5>
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
                <label className="d-block level mb-3">
                  <h4>Add Quantity</h4>
                </label>
                <input
                  type="number"
                  name="formQuantity"
                  placeholder="Type Add Quantity"
                  className="me-3 input"
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

const ShowModifiedQuantityProduct = ({ pd, handleDelivered }) => {
  return (
    <>
      {/* <Col md={6} lg={6} sm={12} className="left-column">
              <div className="product-img d-flex justify-content-center align-items-center">
                <img
                  className="w-75 rounded"
                  src={pd.image}
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
                <h2>{pd.name}</h2>
                <h3>${pd.price}</h3>
                <h5>Quantity: {pd.quantity}</h5>
                <h5>Supplier: {pd.supplier}</h5>
                <h5>{pd.supplier}</h5>
                <p>{pd.singleProduct}</p>

                <button
                  className="delivered-btn"
                  onClick={() => handleDelivered(pd._id)}
                >
                  DELIVERED
                </button>
              </div>
            </Col> */}
    </>
  );
};
export default SingleInventory;
