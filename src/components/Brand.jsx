import React, {useState} from 'react';
import CardProduct from './CardProduct';

const Brand = ({selectedBrand, orders, setOrders}) => {    
  return (
    <>
      {selectedBrand.goods.map(product => {
        return  <CardProduct product={product} key={product.id} orders={orders} setOrders={setOrders}/> 
      })} 
    </>
  )
}

export default Brand;
