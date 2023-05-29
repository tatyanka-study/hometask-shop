import React, {useState} from 'react';
import CardProduct from '../CardProduct';

const Header = () => {

  let [cartOpen, setCartOpen] = useState(false);
 

  return (
    <header>
       <div className="container"> 
            <div className="menu">
                <ul className="navbar">
                    <li><a href="#">Shop</a></li>
                    <li><a href="#" onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shopping-cart ${cartOpen && 'active'}`} >Shopping Cart</a></li>
                    <li><a href="#">History</a></li>
                    <li><a href="#">Coupons</a></li>
                </ul>
              
                {cartOpen && (
    <div className='modal-cart'></div>)}
            </div>
        </div>
    </header>
  )
}

export default Header;