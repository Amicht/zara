import React, { useEffect, useState , useRef} from 'react'
import productDB from '../product.DB.json'
import Product from './Product';


const Store = () => {
    const addToCount = 20;
    const [products, setProducts ] = useState([]);
    const [category, setCategory ] = useState("גברים");
    const [listCount, setListCount] = useState(addToCount);
    const searchInput = useRef();
    useEffect(()=> setProducts(productDB), []);

    const categories = ["גברים", "נשים", "ילדים"];
  return (
    <div>
        <nav className='sticky-top my-3 col-4' style={{direction:"ltr"}}>
          <div className='input-group'>
            <button className='btn btn-outline-primary' onClick={() => {
              setListCount(addToCount);
              setCategory(searchInput.current.value);
            }}>חפש
            </button>
            <select ref={searchInput} className="form-control text-center">
              {categories.map((opt,i)=><option key={i}>{opt}</option>)}
            </select>
          </div>
        </nav>

        <h2>חנות</h2>

        <div className='row'>
        {products.filter(p => category === p.category).map((p,i) => 
        i<listCount?<Product key={i} product={p}/>:null)}
        </div>
        <button onClick={()=> setListCount(listCount+addToCount)} className='my-3 btn btn-primary '>טען עוד...</button>
    </div>
  )
}

export default Store