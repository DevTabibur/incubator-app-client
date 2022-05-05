import React from 'react';
import { useParams } from 'react-router-dom';
import './SingleInventory.css';

const SingleInventory = () => {
  
  const {id} = useParams();
  console.log(id)

  return (
    <div>SingleInventory</div>
  )
}

export default SingleInventory