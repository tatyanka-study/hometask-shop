import React from 'react';


const ShoppingCart = () => {

  return (
    <div className='shopping-card'>
        <h2>Shopping Cart</h2>
        
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
    
  )
}

export default ShoppingCart;
