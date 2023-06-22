import React from 'react';
import CartIcon from 'assets/images/icons/bag.svg';

const Cart = () => {
  return <div className='w-8 h-8 relative'>
    <img src={CartIcon} className='cursor-pointer' />
  </div>
}

export default Cart;