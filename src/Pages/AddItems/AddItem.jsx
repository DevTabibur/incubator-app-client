import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import "./AddItem.css";

const AddItem = () => {
  const [user] = useAuthState(auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const sold = e.target.sold.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const supplier = e.target.supplier.value;
    const quantity = e.target.quantity.value;
    const image = e.target.image.value;

    const addNewItem = {
      name,
      email,
      sold,
      description,
      price,
      supplier,
      quantity,
      image,
    };

    console.log("addNewItem", addNewItem);

    // send this newItem info to server
    const url = `http://localhost:5000/add-item`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addNewItem),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log('data post new item', data)
      });
  };

  return (
    <>
      <Container className="py-5">
        <div className="section-title mb-4">
          <h2>Add Your Item</h2>
          <p className="mb-0">You can also add your own product here.</p>
        </div>
        <Row>
          <Col>
            <div className="restock-form d-block text-center">
              <form onSubmit={handleSubmit}>
                <input type="email" name="email" value={user.email} readOnly />
                <br />
                <input
                  type="text"
                  name="name"
                  placeholder="Product Name"
                  required
                />
                <br />
                <input type="number" name="sold" placeholder="Sold" />
                <br />
                <input
                  type="number"
                  name="price"
                  id="price"
                  placeholder="Price"
                  required
                />
                <br />
                <input
                  type="text"
                  name="supplier"
                  placeholder="Supplier Name"
                  required
                />
                <br />
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  placeholder="Quantity"
                  required
                />
                <br />
                <input
                  type="text"
                  name="image"
                  placeholder="Image Link"
                  required
                />
                <br />
                <textarea
                  name="description"
                  id="description"
                  placeholder="Description"
                ></textarea>
                <br />
                <input type="submit" className="submit-btn" />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddItem;
