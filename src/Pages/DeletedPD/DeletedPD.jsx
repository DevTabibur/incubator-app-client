import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import './DeletedPD.css';

const DeletedPD = ({product, handleDelete}) => {
  return (
    <>
        <Col
      md={4}
      sm={12}
      lg={4}
      className="d-flex justify-content-center align-items-center g-4"
    >
      <Card
        className="parent-col shadow p-3 rounded"
        style={{ width: "22rem" }}
        
      >
        <Card.Img className=" h-75 mx-auto" variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            <h5>Supplier: {product.supplier}</h5>
            <h5>Price: ${product.price}</h5>
            <h5>Quantity: {product.quantity}</h5>
            <h5>Sold: {product.quantity}</h5>
            <p>{product.description}</p>
          </Card.Text>
          <button onClick={()=>handleDelete(product._id)} className="card-btn">DELETE</button>
        </Card.Body>
      </Card>
    </Col>
    </>
  )
}

export default DeletedPD;