import React, {useState} from 'react';
import Header from './pages/Header';
import Brands from './Brands';
import Brand from './Brand';
import { brandList } from './data';
import FlashMessage from './FlashMessage';


const Shop = () => {

  const [selectedBrandId, setSelectedBrandId] = useState(0);
  const [orders, setOrders] = useState([]);

  const getSelectedBrand = (id) => {
    if (id === 0) {
      return getAllBrandsGoods(); 
    }
    return brandList.find((brand) => brand.id === id)
  }

  const getAllBrandsGoods = () => ({
      id: 0,        
      name: 'allBrands',
      goods: getAllGoods()
  });


  const getAllGoods = () => {
    const goods = [];
      brandList.forEach(brand => {
        if (brand.goods) {
          goods.push(...brand.goods)
        }
      });
    return goods;
  }

  const getOrdersItems = () => {
  const goods = getAllGoods();
  const ordersItems = goods.filter((good) => orders.includes(good.id))
    return ordersItems;
  }

  const deleteHandler = (id) => {
    setOrders(orders.filter((order) => order !== id))
  }

  return (
    <div className='wrapper'>
      <Header ordersItems={getOrdersItems()} resetOrders={setOrders} deleteHandler={deleteHandler} />
      <main>
            <div className='main'>
                <div className='sidebar'>
                    <Brands brandList={brandList} setSelectedBrandId={setSelectedBrandId}/>
                </div>
                <div className='sidebar right'>
                    <Brand selectedBrand={getSelectedBrand(selectedBrandId)} orders={orders} setOrders={setOrders}/>  
                    <FlashMessage text={'Order added to cart'} duration ={2000} orders={orders} />                 
                </div>
            </div>
      </main>
      <footer>
          <div >ElifTech-shop &copy; 2023</div>          
          </footer>
    </div>
  )
}
export default Shop;