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
      {/* <Container>
        <Row>
          {products.map((product) => (
            <ShowProductHome key={product.id} product={product} />
          ))}
        </Row>
      </Container> */}
      {/* <ShopNow/> */}
      <Team/>
    </>
  );
};

const ShowProductHome = ({ product }) => {
  return (
    <Col className="d-flex justify-content-center align-items-center">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Home;
