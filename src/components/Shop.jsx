import React, {useState} from 'react';
import Header from './pages/Header';
import Brands from './Brands';
import Brand from './Brand';
import { brandList } from './data';


const Shop = () => {

  const [selectedBrandId, setSelectedBrandId] = useState(0);

  const [orders, setOrders] = useState([]);

  console.log(orders)

  const getSelectedBrand = (id) => {
    if (id === 0) {
      return getAllGoods(); 
    }

    return brandList.find((brand) => {
      return brand.id === id;
    })

  }

  const getAllGoods = () => {

  const allGoods = {
    id: 0,        
    name: 'allBrands',
    goods:[]
  }

  brandList.forEach(brand => {
    if (brand.goods) {
      allGoods.goods.push(...brand.goods)
    }
  })
  return allGoods;
}

  return (
    <div className='wrapper'>
      <Header />
      <main>
            <div className='main'>
                <div className='sidebar'>
                    <Brands brandList={brandList} setSelectedBrandId={setSelectedBrandId}/>
                </div>
                <div className='sidebar right'>
                    <Brand selectedBrand={getSelectedBrand(selectedBrandId)} orders={orders} setOrders={setOrders}/>                   
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