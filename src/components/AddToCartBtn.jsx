import React, {useState} from 'react';



const AddToCartBtn = ({identification, orders, setOrders}) => {    

  const addToCart = () => {
     
    console.log(identification)
    let newOrder = [...orders, identification];
   

   return setOrders(newOrder);
  }

    return (
      <div>
        <button className='add-to-card-btn' onClick={addToCart}>add to Cart</button>
      </div>
    )
  }

export default AddToCartBtn;