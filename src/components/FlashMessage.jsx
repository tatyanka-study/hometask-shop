import React, { useState, useEffect } from "react";


const FlashMessage = ({text, duration, orders}) => {
  
  const[open, setOpen] = useState(false);

  useEffect(() => {
    if (orders.length) {
      setOpen(true)
      setTimeout(() => setOpen(false), duration);
    }
  }, [orders])
  
  return (
      <> 
        {open &&  (
              <div className="flash">
                <p>{text}</p>     
              </div>
          )
          }
      </>
  )
}

export default FlashMessage;