import React from 'react'
import { useState, useEffect } from 'react';
const CartListComponent = ({datosProducto}) => {
    const [totalCarrito, setTotalCarrito] = useState(0);
    useEffect(() => {
        const total = datosProducto.reduce((actual, product) => {
            return actual+(product.quantity *product.price);
        }, 0);
        setTotalCarrito(total);
    },[datosProducto]);
  return (
    <div className="container mt-4">
        <table className="table table-hover">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Imagen</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total a Pagar</th>
          </tr>
        </thead>
        <tbody>
          {
            datosProducto.map((producto)=> {
              return(
                <tr key={producto.id}>
                  <td>
                    {producto.title}
                  </td>
                  <td>
                    <img src={producto.thumbnail} alt={producto.title} width="50px"/>
                  </td>
                  <td>
                    {producto.quantity}
                  </td>
                  <td>
                    {producto.price}
                  </td>
                  <td>
                    {producto.price * producto.quantity}
                  </td>
                </tr>
              )
            })
          }
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Total a pagar:</td>
            <td>{totalCarrito}</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CartListComponent