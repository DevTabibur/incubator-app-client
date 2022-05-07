import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import './DeletedPD.css';

const DeletedPD = ({product}) => {

    const [users, setUsers] = useState([]);

  useEffect(() =>{
    fetch('http://localhost:5000/data')
    .then(res=>res.json())
    .then(data => {
      setUsers(data)
      // console.log('data', data);
    });
  }, [])


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
          const remaining = users.filter(user => user._id !== id);
          setUsers(remaining);
        }
      })

    }

  }

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
            <p>{product.description}</p>
          </Card.Text>
          <button onClick={()=>handleDelete(product._id)} className="card-btn">DELETE</button>
        </Card.Body>
      </Card>
    </Col>
    </>
  )
}

export default DeletedPD