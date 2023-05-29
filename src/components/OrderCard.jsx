import React, {useState} from 'react';
// import ShoppingCart from './pages/ShoppingCart';

const OrderCard = ({product, deleteHandler}) => {
        return (
                <div className='card'>
                        <button className="del" onClick={() => deleteHandler(product.id)}>x</button>
                    <figure>
                          <img src={"./images/" + product.img} alt={product.title}/>                  
                          <figcaption>{product.shopName}</figcaption>
                    </figure>
                    <div className='prise_block'>     
                        <p>{product.title}</p>
                        <p>price: {product.price} hrn</p>
                    </div>                  
                </div>
              )  
        }

export default OrderCard;
