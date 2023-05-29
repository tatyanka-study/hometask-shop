import React from 'react';
import CardProduct from './CardProduct';

const Brand = ({selectedBrand}) => {
    console.log(selectedBrand)
  return (
    <>
    {selectedBrand.goods.map(product => {
       return  <CardProduct product={product} key={product.id}/> 
    })}
       
    </>
  )
}
export default Brand;
