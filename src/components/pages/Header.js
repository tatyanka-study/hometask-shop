import React from 'react'
import { shops } from '../data'

export default function Header() {
  return (
    <header>
       <div class="container"> 
            <div class="menu">
                <ul class="navbar">
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
