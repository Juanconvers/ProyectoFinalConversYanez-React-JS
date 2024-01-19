import {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {

const [count, setCount] = useState([{}]); 

    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleRemove = () => {
        setCount(count - 1)
    }
console.log(count)
return(
    <CartContext.Provider value={{count, setCount, handleAdd, handleRemove}}>
        {children}
    </CartContext.Provider>

)

}