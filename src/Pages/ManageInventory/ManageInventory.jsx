import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../App';
import DeletedPD from '../DeletedPD/DeletedPD';
import useProducts from '../Hooks/useProducts';
import './ManageInventory.css';

const ManageInventory = () => {
  const [products, setProducts] = useContext(ProductContext);
  // console.log(products);

  return (
    <>
    <Container className="py-5">
      <div className="section-title">
                <h2>Manage Products</h2>
                <p className="mb-0">You can find the best gadgets ever!</p>
            </div>
        <Row>
          {products.map((product) => (
            <DeletedPD key={product._id} product={product} />
          ))}
          <Link to="/add-item">ADD NEW ITEM</Link>
        </Row>
      </Container>
      
    </>
  )
};

export default ManageInventory;

