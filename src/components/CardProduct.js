import React, { Component } from 'react'
import Addbtn from './Addbtn'

const CardProduct = ({product}) => { 
    return (
      <div className='card'>
          <figure>
                <img src={"./images/" + product.img} alt={product.title}/>                  
                <figcaption>{product.shopName}</figcaption>
          </figure>
          <div className='prise_block'>     
              <p>{product.title}</p>
              <p>price: {product.price} hrn</p>
          </div>
          <Addbtn />
      </div>
    )  
}

export default CardProduct;