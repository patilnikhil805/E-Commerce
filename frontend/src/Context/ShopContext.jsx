import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product';




export const ShopContext= createContext(null);

const contextValue = {all_product};

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300 + 1; index++) {
        cart[index] = 0;
    }
    return cart;
};



const ShopContextProvider = (props)=>{
    
    const contextValue = {all_product};

    const [cartItems, setCartItems] = useState(getDefaultCart());

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;