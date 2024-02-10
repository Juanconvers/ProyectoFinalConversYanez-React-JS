import { useContext, useState } from "react";
import { Button } from "react-bootstrap"
import {CartContext} from "../../context/CartContext";

const ItemCount = ({productTitle}) => {

    const [countItem, setCountItem] = useState(1);
    const {cartElements, setCartElements} = useContext(CartContext);

    const handleAdd = () => {
      setCountItem(countItem + 1);
    };

    const handleRemove = () => { 
      setCountItem(countItem - 1);
    };

    const handleAddProductToCart = () => {
      const productExist = cartElements.find((item) => item.id === productTitle);

      if(productExist){
        setCartElements(
          cartElements.map((item) => item.id === productTitle? {...item, quantity: item.quantity + countItem} : item))
        }else{
          setCartElements([...cartElements, { id: productTitle, quantity: countItem}])
        }
        setCountItem(1);
    }

  return (
    <div>
        <div style = {{width: '50%', display: 'flex', align: 'center', justifyContent: 'space-between', margin: 'auto'   }}>
          <Button variant="secondary" onClick={handleRemove} >-</Button>
          <span>{countItem}</span>
          <Button variant="secondary" onClick={handleAdd} >+</Button>
      </div>
        <div style = {{width: '80%', display: 'flex', align: 'center', justifyContent: 'center', margin: 15   }}>
          <Button variant="warning" onClick = {handleAddProductToCart}>Agregar al Carrito</Button>
        </div>
    </div>
  )
}

export default ItemCount


      //   id: productId,
      //   quantity: countItem,
      // };
      // if (count.length === 0) {
      //   setCount([newProduct]);
      // } else {

        


      //     if (item.id === productId) {
      //       return {
      //         ...item,
      //         quantity: item.quantity + countItem,
      //       };
      //     } else {
      //       setCount([...count, {id: productId, quantity: countItem}]);
          
      // }