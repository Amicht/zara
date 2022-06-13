import React, { useContext } from 'react'
import { CartCtxt } from '../App'

const Product = ({product}) => {
    const {cart, setCart} = useContext(CartCtxt);

  return (
    <div className="card col-3">
        <img src={product.image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">
                מחיר: {product.price}
            </p>
            <button onClick={()=> setCart([...cart,product])} 
                className="btn btn-primary">הוסף לעגלה
            </button>
        </div>
    </div>
  )
}

export default Product