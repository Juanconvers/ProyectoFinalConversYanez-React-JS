import React from 'react'
import Box from "../assets/img/cart-x-fill-svgrepo-com.svg"

const CartEmptyComponent = () => {
  return (
    <div>
      <div style={{display: "flex", align: "center", justifyContent: "center"}}>
        <img  src={Box} alt="EmptyBox" style={{width: 120, padding:15}}/>
      </div>
        <div style={{display: "flex", align: "center", justifyContent: "center", fontSize: "2em"}}>¿No va a escoger ningún producto?</div>
        <div style={{display: "flex", align: "center", justifyContent: "center", fontSize: "1.5em"}}>Nuestro catálogo lo espera </div>
        
    </div>
    
    
  )
}

export default CartEmptyComponent