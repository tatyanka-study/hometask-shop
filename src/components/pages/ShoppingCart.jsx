import React from 'react';
import OrderCard from '../OrderCard';


const ShoppingCart = ({ordersItems, deleteHandler}) => {

  const calcPrice = ordersItems.map(item => item.price).reduce((a, b) => Number(a) + Number(b))

  return (
    <div className='modal-cart'>
        
        <div className='form-container'>
          <h4>Shopping Cart</h4>
          <form action='POST'>
            <label for="name"><b>Name:</b></label>
              <input type="text" placeholder="Enter your name" name="name" required/>

              <label for="email"><b>Email:</b></label>
              <input type="email" placeholder="Enter Email" name="email" required/>

              <label for="phone"><b>Phone:</b></label>
              <input type="phone" placeholder="Enter your phone" name="phone" required/>

              <label for="address"><b>Address:</b></label>
              <input type="text" placeholder="Enter your address" name="address" required/>                
          </form>  
        </div>

        <div className='products'>
          {ordersItems.map(product => {
            return <OrderCard product={product} deleteHandler={deleteHandler} key={product.id} /> 
          })}       
        </div>  
        <div className="basketFooter">
            <p>Total price: {calcPrice}</p>
          </div>       
    </div>
    
  )
}

export default ShoppingCart;
