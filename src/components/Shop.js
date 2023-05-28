import React from 'react';
import Header from './pages/Header';
import Brands from './Brands';
import { brandList } from './data';


const Shop = () => {

  return (
    <div className='wrapper'>
      <Header />
      <main>
            <div className='main'>
                <div className='sidebar'>
                    <Brands brandList={brandList} />
                </div>
                <div className='sidebar right'>
                   
                </div>
            </div>
      </main>
      <footer>
          <div>ElifTech-shop &copy; 2023</div>
      </footer>
    </div>
  )
}
export default Shop;