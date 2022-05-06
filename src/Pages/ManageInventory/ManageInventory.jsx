import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../App';
import './ManageInventory.css';

const ManageInventory = () => {
  const [products, setProducts] = useContext(ProductContext);
  

  return (
    <>
    <Container className="py-5">
      <div className="section-title">
                <h2>Manage Products</h2>
                <p className="mb-0">You can find the best gadgets ever!</p>
            </div>
        <Row>
          {products.map((product) => (
            <ShowProduct key={product._id} product={product} />
          ))}
        </Row>
      </Container>
      
    </>
  )
}

const ShowProduct = ({product}) =>{
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

  return(
    <div className='all-products'>
    <Container>
      <Row>
        {users.map(user => <ShowProductAfterDelete
          key={user._id}
          user={user}
          handleDelete={handleDelete}
        />)}
      </Row>
      </Container>

      
    </div>
  )
}

const ShowProductAfterDelete = ({user, handleDelete}) =>{

  
  return(
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
        <Card.Img className=" h-75 mx-auto" variant="top" src={user.image} />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>
            <h5>Supplier: {user.supplier}</h5>
            <h5>Price: ${user.price}</h5>
            <h5>Quantity: {user.quantity}</h5>
            <p>{user.description}</p>
          </Card.Text>
          <button onClick={()=>handleDelete(user._id)} className="card-btn">DELETE</button>
        </Card.Body>
      </Card>
    </Col>
    </>
  )
}

export default ManageInventory;