import React, { useEffect, useState } from 'react'

const useSingleProduct = (id) => {
    const [singleProduct, setSingleProduct] = useState({});
    
  useEffect(() => {
    const url = `https://rocky-caverns-33077.herokuapp.com/data/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, [singleProduct]);

  return [singleProduct, setSingleProduct];
}

export default useSingleProduct;