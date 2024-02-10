import {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cartElements, setCartElements] = useState([]); 

    return(
        <CartContext.Provider value={{cartElements, setCartElements}}>
            {children}
        </CartContext.Provider>
        )
    }