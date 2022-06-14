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
    <div className='col-sm-8 mx-auto mt-2'>
    <h2>העגלה שלי</h2>
    {cart.length >0? 
    <table className="table table-striped"> 
      <thead>
        <tr>
          <th colSpan={3}>מוצר</th>
          <th colSpan={1}>תמונה</th>
          <th colSpan={1}>מחיר</th>
          <th colSpan={1}>#</th>
        </tr>
      </thead>
      <tbody>
      {cart.map((p,i)=> <CartTable key={i} product={p}/>)}
      <tr>
        <th colSpan={1}></th>
        <th colSpan={4}>סהכ לתשלום: </th>
        <th colSpan={1}><Price price={totalPrice}/></th>
      </tr>
      </tbody>
    </table>: <div className='mt-5'>אין מוצרים בעגלה</div>}
    </div>
  )
}

export default Cart