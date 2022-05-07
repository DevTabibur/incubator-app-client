import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './AddItem.css';

const AddItem = () => {

  const handleForm = (e) =>{
    e.preventDefault();
    const name = e.target.fname.value;
    const mail = e.target.email.value;

    const user = {name, mail};
    console.log(user);

    // send data to the server
    fetch('http://localhost:5000/add-item', {
      method: "POST",
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log('success', data)
      alert('user added successfully!');
      e.target.reset();
      
    })
  }


  return (
    <>
    <Container className='py-5'>
    <div className="section-title mb-4">
            <h2>Add Your Item</h2>
            <p className="mb-0">You can also add your own product here.</p>
          </div>
      <Row>
        <Col>
        <form>
          <label htmlFor=""></label>
        </form>
        {/* <form>
     <label>First name:</label>
     <input type="text" id="fname" name="fname">
     <label>Last name:</label><br>
      <input type="text" id="lname" name="lname">
   </form> */}
        </Col>
      </Row>
    </Container>
      
      
    </>
  )
}

export default AddItem;