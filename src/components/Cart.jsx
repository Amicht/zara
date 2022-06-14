import React, { useContext, useEffect, useState } from 'react'
import { CartCtxt } from '../App'
import CartTable from './CartTable';
import Price from './Price'

const Cart = () => {
  const { cart } = useContext(CartCtxt);
  const [totalPrice, setTotalPrice] = useState(0);
  
  useEffect(()=> {
    let total = 0;
    cart.forEach(p => total+= p.price);
    setTotalPrice(total.toFixed(1));
  },[cart]);

  return (
    <div className='col-8 mx-auto mt-2'>
    <h2>העגלה שלי</h2>
    {cart.length >0? 
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
        <th>סהכ לתשלום: </th>
        <th><Price price={totalPrice}/></th>
        <th></th>
      </tr>
      </tbody>
    </table>: <div className='mt-5'>אין מוצרים בעגלה</div>}
    </div>
  )
}

export default Cart