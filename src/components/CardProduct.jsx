import React from 'react';
import AddToCartBtn from './AddToCartBtn'

const CardProduct = ({product, orders, setOrders}) => { 

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
          <AddToCartBtn identification={product.id} orders={orders} setOrders={setOrders}/>
      </div>
    )  
}

export default CardProduct;