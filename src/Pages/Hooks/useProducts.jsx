import React, { useEffect, useState } from 'react'

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch("https://rocky-caverns-33077.herokuapp.com/data")
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [products]);

  return [products, setProducts]
}

export default useProducts;