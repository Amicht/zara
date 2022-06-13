import React, { useEffect, useState } from 'react'
import productDB from '../product.DB.json'
import Product from './Product';


const Store = () => {
    const [products, setProducts ] = useState([]);
    const [category, setCategory ] = useState("גברים");
    useEffect(()=> setProducts(productDB), []);

    const options = ["גברים", "נשים", "ילדים"];
  return (
    <div>
        <h2>חנות</h2>
        <select onChange={e => setCategory(e.target.value)}>
          {options.map((opt,i)=><option key={i}>{opt}</option>)}
        </select>
        <div className='row'>
        {products.map((p,i) => category===p.category?<Product key={i} product={p}/>:null)}
        </div>
    </div>
  )
}

export default Store