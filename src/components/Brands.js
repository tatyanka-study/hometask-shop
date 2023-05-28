import React from 'react';


const Brands = ({brandList}) => {
  return (
    <>
        {brandList.map(brand=> (
            <div className='shop' key={brand.id} onClick={() => console.log(brand)}><p>{brand.name}</p></div>
        ))}
    </>
  )
}

export default Brands;
