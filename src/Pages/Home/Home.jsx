import React, { useContext } from 'react';
import './Home.css';
import HeroBanner from '../Banner/HeroBanner';
import { ProductContext } from '../../App';

const Home = () => {
    const [products, setProducts] = useContext(ProductContext);
    console.log(products);
  return (
    <>
        {/* <HeroBanner/> */}
    </>
  )
}

export default Home