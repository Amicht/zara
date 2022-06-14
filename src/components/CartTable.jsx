import React, { useContext } from 'react'
import { CartCtxt } from '../App'
import Price from './Price'

const CartTable = ({product}) => {
    const { cart, setCart } = useContext(CartCtxt);

  return (
    <tr>
        <td colSpan={3}>{product.name}</td>
        <td colSpan={1}><img alt={product.name} src={product.image}/></td>
        <td colSpan={1}><Price price={product.price}/></td>
        <td colSpan={1}><button className='btn btn-success' onClick={()=>{
            const productIdx = cart.findIndex(p => p.id === product.id);
            cart.splice(productIdx, 1);
            setCart(() => [...cart]);
        }}>הסר</button></td>
    </tr>
  )
}

export default CartTable