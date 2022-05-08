import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../Firebase/firebase.init";
import "./MyItems.css";

const MyItems = () => {
  const [user] = useAuthState(auth);

  const [addedItems, setAddedItems] = useState([]);
  console.log(addedItems.filter( mail => console.log('mail', mail)))

  useEffect(()=>{
    const url = `http://localhost:5000/data`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setAddedItems(data)
    })
  }, [])

//   useEffect(() => {
//     const getItems = async () => {
//         const email = user?.email
//         const url = `http://localhost:5000/singleItem?email=${email}`;

//         try {
//             const { data } = await axios.get(url, {
//                 headers: {
//                     authorization: Bearer ${localStorage.getItem('token')}
//                 }
//             })

//             setItems(data)
//         } catch (error) {

//             if (error.response.status === 403 || error.response.status === 401) {
//                 signOut(auth)
//                 navigate('/signin')
//             }
//             toast(error.message)
//         }
//     }
//     getItems()

// }, [])




  return (
    <>
      <Container className="py-5">
        <div className="section-title mb-4">
          <h2>Your Added Items</h2>
          <p className="mb-0">here you can find your own item.</p>
        </div>
        <Row>
          {addedItems.map(item => <ShowAddedItems
            key={item._id}
            item={item}
          />)}
        </Row>
      </Container>
    </>
  );
};

const ShowAddedItems = ({item}) =>{
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
        <Card.Img className=" h-75 mx-auto" variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            <h5>Supplier: {item.supplier}</h5>
            <h5>Price: ${item.price}</h5>
            <h5>Quantity: {item.quantity}</h5>
            <p>{item.description}</p>
          </Card.Text>
          {/* <Link to={`/inventory/${item._id}`} className="card-btn">UPDATE</Link> */}
        </Card.Body>
      </Card>
    </Col>
    </>
  )
}

export default MyItems;
