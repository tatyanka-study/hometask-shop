// import React from 'react'
import { useState } from "react";
import Header from './pages/Header'
import Footer from './pages/Footer'
import Main from './pages/Main'
import { shops1 } from '../data1'

export default function Shop() {
    const [newItem, setItems] = useState(shops1);

  return (
    <div>
    <Header />
    <Main shop={newItem} setShop={setItems}/>
    <Footer />
    </div>
  )
}
