import React, { useEffect, useState , useRef} from 'react'
import productDB from '../product.DB.json'
import Product from './Product';


const Store = () => {
    const [products, setProducts ] = useState([]);
    const [category, setCategory ] = useState("גברים");
    const searchInput = useRef();
    useEffect(()=> setProducts(productDB), []);

    const categories = ["גברים", "נשים", "ילדים"];
  return (
    <div>
        <nav className='sticky-top my-3 col-4' style={{direction:"ltr"}}>
        <div className='input-group'>
        <button className='btn btn-outline-primary' onClick={() => setCategory(searchInput.current.value)}>חפש</button>
          <select ref={searchInput} className="form-control text-center">
            {categories.map((opt,i)=><option key={i}>{opt}</option>)}
          </select>
        </div>
        </nav>
        <h2>חנות</h2>
        <div className='row'>
        {products.map((p,i) => category===p.category?<Product key={i} product={p}/>:null)}
        </div>
    </div>
  )
}

export default Store