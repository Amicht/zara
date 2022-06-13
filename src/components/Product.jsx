import React from 'react'

const Product = ({product}) => {
    
  return (
    <div className="card col-3">
        <img src={product.image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">
                מחיר: {product.price}
            </p>
            <button className="btn btn-primary">הוסף לעגלה</button>
        </div>
    </div>
  )
}

export default Product