import React, { useContext, useEffect, useState } from 'react'
import { CartCtxt } from '../App'
import CartTable from './CartTable';

const Cart = () => {
  const { cart } = useContext(CartCtxt);
  const [totalPrice, setTotalPrice] = useState(0);
  
  useEffect(()=> {
    let total = 0;
    cart.forEach(p => total+= p.price);
    setTotalPrice(total);
  },[cart]);

  return (
    <div className='col-6 mx-auto'>
    <h2>העגלה שלי</h2>
    <table className="table table-striped"> 
      <thead>
        <tr>
          <th>מוצר</th>
          <th>תמונה</th>
          <th>מחיר</th>
          <th>#</th>
        </tr>
      </thead>
      <tbody>
      {cart.map((p,i)=> <CartTable key={i} product={p}/>)}
      <tr>
        <th></th>
        <th></th>
        <th>סהכ לתשלום: </th>
        <th>{totalPrice}</th>
      </tr>
      </tbody>
    </table>
    </div>
  )
}

export default Cart