import React, { useContext } from 'react'
import { CartCtxt } from '../App'
import Price from './Price'

const CartTable = ({product}) => {
    const { cart, setCart } = useContext(CartCtxt);

  return (
    <tr>
        <td>{product.name}</td>
        <td><img alt={product.name} src={product.image}/></td>
        <td><Price price={product.price}/></td>
        <td><button className='btn btn-success' onClick={()=>{
            console.log(cart);
            const productIdx = cart.findIndex(p => p.id === product.id);
            cart.splice(productIdx, 1);
            setCart(() => [...cart]);
            console.log(cart);
        }}>הסר מהעגלה</button></td>
    </tr>
  )
}

export default CartTable