import React from 'react'
// import { useState } from "react";
import Header from './pages/Header'
import Footer from './pages/Footer'
import Main from './pages/Main'
// import { shops1 } from '../data1'

class Shop extends React.Component () {

    constructor(props) {
        super(props)
        this.state = {
            shopss: [   
                {     
                    id: 11,
                    title: 'Hamburger',
                    img: 'burger.jpg',
                    shopName: 'McDonald\'s',
                    price: '55.00'
                },
                {     
                    id: 12,
                    title: 'Cheeseburger',
                    img: 'burger.jpg',
                    shopName: 'McDonald\'s',
                    price: '65.00'
                },
                {     
                    id: 13,
                    title: 'Big Mac',
                    img: 'BigMac.jpg',
                    shopName: 'McDonald\'s',
                    price: '102.00'
                },
                {     
                    id: 14,
                    title: 'Fries',
                    img: 'Fries.jpg',
                    shopName: 'KFC',
                    price: '55.00'
                },
                {     
                    id: 15,
                    title: 'Happy Meal',
                    img: 'burger.jpg',
                    shopName: 'McDonald\'s',
                    price: '160.00'
                },
                {     
                    id: 16,
                    title: 'Boxmaster',
                    img: 'Boxmaster.png',
                    shopName: 'KFC',
                    price: '160.00'
                },
                {     
                    id: 17,
                    title: 'Classik',
                    img: 'Classik.png',
                    shopName: 'KFC',
                    price: '99.00'
                },
                {     
                    id: 18,
                    title: 'Toast New Uk.png',
                    img: 'toast_new_uk.png',
                    shopName: 'KFC',
                    price: '50.00'
                },
                {     
                    id: 19,
                    title: 'Cherry Pie',
                    img: 'Cherry_Pie.png',
                    shopName: 'KFC',
                    price: '44.00'
                },
                {     
                    id: 20,
                    title: 'Mexico Burger',
                    img: 'mexico_burger.png',
                    shopName: 'Dogz&Burgerz',
                    price: '208.00'
                },
                {     
                    id: 21,
                    title: 'Burger',
                    img: 'burger.jpeg',
                    shopName: 'Dogz&Burgerz',
                    price: '80.00'
                },
                {     
                    id: 22,
                    title: 'Burger Chipolino',
                    img: 'burger_chipolino.jpg',
                    shopName: 'Ikura',
                    price: '144.00'
                },
                {     
                    id: 23,
                    title: 'Double Сheeseburger',
                    img: 'double_cheeseburger.jpg',
                    shopName: 'Ikura',
                    price: '199.00'
                },
                {     
                    id: 24,
                    title: 'Pizza Prosciutto',
                    img: 'prosciutto_pizza.jpg',
                    shopName: 'Ikura',
                    price: '195.00'
                },
                {     
                    id: 25,
                    title: 'Зotatoes',
                    img: 'potatoes.jpg',
                    shopName: 'Ikura',
                    price: '35.00'
                },    
            
                ]
        }
    } 
render(){
  return (
    <div className='wrapper'>
    <Header />
    <Main shopss={this.state.shopss} />
    <Footer />
    </div>
  )
}
}

export default Shop;
