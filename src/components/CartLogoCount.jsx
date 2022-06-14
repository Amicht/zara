import React, { useContext } from 'react'
import { CartCtxt } from '../App'

const CartLogoCount = () => {
    const { cart } = useContext(CartCtxt);
  return (
    <span className='cart-count'>{cart.length>0?cart.length:null}</span>
  )
}

export default CartLogoCount