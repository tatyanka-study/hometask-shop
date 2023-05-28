import React from 'react';

const Header = () => {
  return (
    <header>
       <div className="container"> 
            <div className="menu">
                <ul className="navbar">
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Shopping Cart</a></li>
                    <li><a href="#">History</a></li>
                    <li><a href="#">Coupons</a></li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header;