import React from 'react'
import { shops } from '../data'

export default function Header() {
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
