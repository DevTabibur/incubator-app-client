import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import HeroBanner from "../Banner/HeroBanner";
import { ProductContext } from "../../App";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Team from "../Team/Team";
import { Link } from "react-router-dom";
import Service from "../Shared/Service/Service";
import GoogleMap from "../Shared/GoogleMap/GoogleMap";
import Spinner from "../Shared/Spinner/Spinner";

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    const url = ``
    fetch(url)
      .then(res => res.json())
      .then(data =>
        setLoading(false))
  }, [])

  const [products, setProducts] = useContext(ProductContext);
  const sliceProducts = products.slice(0, 6);

  return (
    <div>
    <Spinner/>
      <HeroBanner />
      <Service/>

      {/* products */}
      <Container className="py-5">
      <div className="section-title">
                <h2>Choose Your Products</h2>
                <p className="mb-0">You can find the best gadgets ever!</p>
            </div>
        <Row>
          {sliceProducts.map((product) => (
            <ShowProductHome key={product._id} product={product} />
          ))}
          <Link className="mt-4 w-50 p-4 mx-auto shadow" to="/manage-inventory">Manage Inventories</Link>
        </Row>
      </Container>

      <Team/>
      <GoogleMap/>
    </div>
  );
};

const ShowProductHome = ({ product }) => {
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
          <Link to={`/inventory/${product._id}`} className="card-btn">UPDATE</Link>
        </Card.Body>
      </Card>
    </Col>
    </>
  );
};

export default Home;
