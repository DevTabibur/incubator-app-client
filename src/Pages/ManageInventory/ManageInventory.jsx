import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../App';
import DeletedPD from '../DeletedPD/DeletedPD';
import useProducts from '../Hooks/useProducts';
import './ManageInventory.css';

const ManageInventory = () => {
  const [products, setProducts] = useContext(ProductContext);


  const handleDelete = id =>{
    const proceed = window.confirm("are you want to delete?")

    if(proceed){
      const url = `http://localhost:5000/data/${id}`
      fetch(url, {
        method: "DELETE"
      })
      .then(res=>res.json())
      .then(data=> {
        console.log(data)
        if(data.deletedCount > 0){
          const remaining = products.filter(product => product._id !== id);
          setProducts(remaining);
        }
      })

    }

  }

  return (
    <>
    <Container className="py-5">
      <div className="section-title">
                <h2>Manage Products</h2>
                <p className="mb-0">You can find the best gadgets ever!</p>
            </div>
        <Row>
          {products.map((product) => (
            <DeletedPD key={product._id} product={product} handleDelete={handleDelete} />
          ))}
          <Link to="/add-item" className='add-item-btn my-5 py-3'>ADD NEW ITEM</Link>
        </Row>
      </Container>
      
    </>
  )
};

export default ManageInventory;

