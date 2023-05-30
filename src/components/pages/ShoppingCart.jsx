import React, {useState, useEffect} from 'react';
import OrderCard from '../OrderCard';

const ShoppingCart = ({ordersItems, deleteHandler}) => {
  let initialValue = 0;

  const calcPrice = ordersItems.map(item => item.price).reduce((a, b) => Number.parseFloat(a) + Number.parseFloat(b),initialValue).toFixed(2);
  
      const [initialValues, setInitialValues] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
      });
      const [formValues, setFormValues] = useState([]);

      const submitForm = () => {
        if (!initialValues.name || !initialValues.email || !initialValues.phone || !initialValues.address) {
          // в умові для if потрібно перебирати елементи input на наявныть value
          return alert("please fill out the form");
        }
        setFormValues([...formValues, {...initialValues, ordersItems}]); 
        
        initialValues.name = "";
        initialValues.email = "";
        initialValues.phone = "";
        initialValues.address = "";
        ordersItems.length = 0;
      };

      useEffect(() => {
        localStorage.setItem("formValues", JSON.stringify(formValues));
      }, [formValues]);     

 
  return (
    <div className='modal-cart'>
        
        <div className='form-container'>
          <h4>Shopping Cart</h4>
          <form method='POST' action=''>
            <label for="name"><b>Name:</b></label>             
              <input type="text" placeholder="Enter your name" required value={initialValues.name} onChange={(e) => setInitialValues({ ...initialValues, name: e.target.value })}/>

              <label for="email"><b>Email:</b></label>             
              <input type="email" placeholder="Enter your Email" required value={initialValues.email} onChange={(e) => setInitialValues({ ...initialValues, email: e.target.value })}/>

              <label for="phone"><b>Phone:</b></label>             
              <input type="phone" placeholder="Enter your phonee" required value={initialValues.phone} onChange={(e) => setInitialValues({ ...initialValues, phone: e.target.value })}/>

              <label for="address"><b>Address:</b></label>              
              <input type="text" placeholder="Enter your address" required value={initialValues.address} onChange={(e) => setInitialValues({ ...initialValues, address: e.target.value })}/>                       
          </form>  
        </div>

        <div className='products'>
          {ordersItems.map(product => {
            return <OrderCard product={product} deleteHandler={deleteHandler} key={product.id} /> 
          })}       
        </div>  
        <div className="basketFooter">
            <p>Total price: {calcPrice} hrn</p>
        </div> 
        <div className='submit'>
         
          <button onClick={submitForm} onKeyDown={submitForm}>Submit </button>
        </div>     
    </div>
    
  )
}

export default ShoppingCart;
