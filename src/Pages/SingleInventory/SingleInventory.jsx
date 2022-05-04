import React from 'react';
import { useParams } from 'react-router-dom';
import './SingleInventory.css';

const SingleInventory = () => {
  const params = useParams();
  console.log(params)
  return (
    <div>SingleInventory</div>
  )
}

export default SingleInventory