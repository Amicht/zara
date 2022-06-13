import React, { useEffect, useState } from 'react'
import productDB from '../product.DB.json'


const Store = () => {
    const [products, setProducts ] = useState([]);
    useEffect(()=> setProducts(productDB), []);

  return (
    <div>
        <h2>חנות</h2>
        {products.map((p,i) => <div key={i}>
            <h4>{p.name}</h4>
            <span>{p.price}</span>
        </div>)}
    </div>
  )
}

export default Store