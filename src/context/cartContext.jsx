import { createContext, useState } from "react";

const CartContext = createContext()

const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(
                cart.map((product) =>
                    product.id === item.id
                        ? { ...product, cantidad: product.cantidad + quantity }
                        : product
                )
            );
        } else {
            setCart([...cart, { ...item, cantidad: quantity }]);
        }
    };

    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    };

    const itemQuantity = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0);
    };

    const total = () => {
        return cart.reduce((acc, item) => acc + item.cantidad * item.price, 0);
    };

    const emptyCart = () => {
        setCart([]);
    };

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };




    return (
        <CartContext.Provider value={ {
            cart,
            setCart,
            addToCart,
            isInCart,
            itemQuantity,
            total,
            emptyCart,
            removeItem,
        } }>
            { children }
        </CartContext.Provider>
    );
};

export { CartContextProvider, CartContext }