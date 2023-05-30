import React from 'react';

const Brands = ({brandList, setSelectedBrandId}) => {
  return (
    <>
        {brandList.map(brand=> (
            <div className='shop' key={brand.id} onClick={() => setSelectedBrandId(brand.id)}><p>{brand.name}</p></div>
        ))}
    </>
  )
}

export default Brands;
