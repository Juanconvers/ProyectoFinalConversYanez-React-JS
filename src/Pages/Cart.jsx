import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { useGetProductsCart } from '../hooks/useProducts';
import CartEmptyComponent from '../components/CartEmptyComponent';
import CartListComponent from '../components/CartListComponent';
const Cart = () => {
  const {cartElements} = useContext(CartContext);
  const {datosProducto} = useGetProductsCart(cartElements);
  // console.log(datosProducto)
  
  return (
    datosProducto.length > 0 ? (
      datosProducto[0] == 'nodata' ? (
        <CartEmptyComponent></CartEmptyComponent>
      ) : (
        <CartListComponent datosProducto = {datosProducto}></CartListComponent>
      )
    ) : (
      <div>Cargando información...</div>
    )
  )
}

export default Cart