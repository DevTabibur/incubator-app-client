import React, { useContext } from "react";
import "./Home.css";
import HeroBanner from "../Banner/HeroBanner";
import { ProductContext } from "../../App";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import ShopNow from "../ShopNow/ShopNow";
import Team from "../Team/Team";

const Home = () => {
  const [products, setProducts] = useContext(ProductContext);
  // const sliceProducts = products.slice(0, 6);
  // console.log(sliceProducts);
  return (
    <>
      {/* <HeroBanner/> */}

      <Container>
        <Row>
          {products.map((product) => (
            <ShowProductHome key={product.id} product={product} />
          ))}
        </Row>
      </Container>

      {/* <ShopNow/> */}
      {/* <Team/> */}
    </>
  );
};

const ShowProductHome = ({ product }) => {
  console.log(product);
  return (
    <Col md={4} sm={12} lg={4} className="d-flex justify-content-center align-items-center g-4">
      <Card className="shadow p-3 rounded" style={{ width: "22rem"}}>
        <Card.Img className=" h-75 mx-auto" variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
          <h3>{product.supplier}</h3>
          <h5>Price: ${product.price}</h5>
          <h5>Quantity: {product.quantity}</h5>
            <p>{product.description}</p>
          </Card.Text>
          <button className="card-btn">SHOP NOW</button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Home;
