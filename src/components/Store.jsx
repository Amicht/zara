import React, { useEffect, useState } from 'react'
import { productsDB } from '../services/database';

const Store = () => {
    const [products, setProducts ] = useState([]);
    useEffect(()=> setProducts([...products, ...productsDB]), []);

  return (
    <div>
        <h2>חנות</h2>
        {products.map(p => <div>
            <h4>{p.name}</h4>
            <span>{p.price}</span>
        </div>)}
    </div>
  )
}

export default Store