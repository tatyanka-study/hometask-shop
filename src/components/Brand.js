import React from 'react';
import CardProduct from './CardProduct';

const Brand = ({selectedBrand}) => {
    console.log(selectedBrand)
  return (
    <>
    {selectedBrand.goods.map(product => {
       return  <CardProduct product={product} /> 
    })}
       
    </>
  )
}
export default Brand;
