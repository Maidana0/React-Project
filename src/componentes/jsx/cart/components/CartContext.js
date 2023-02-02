import { createContext, useState, useEffect, useContext } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    // USER LOG

    const account = JSON.parse(localStorage.getItem('account')) ||
    {
        email: '',
        logged: false
    }


    const [accountUser, setAccountUser] = useState(account)
    useEffect(() => localStorage.setItem('account', JSON.stringify(accountUser)), [accountUser])

    const login = (data) => {
        setAccountUser(
            {
                email: data,
                logged: true
            }
        )
    }

    const logout = () => {
        setAccountUser({
            email: '',
            logged: false
        })
    }


    // CARRITO
    const cartStorage = JSON.parse(localStorage.getItem('carrito')) || []
    const [cart, setCart] = useState(cartStorage)

    const addProduct = (item) => {
        setCart([...cart, item])
    }

    const removeProduct = (id) => {
        setCart(cart.filter(prod => prod.id !== id))
    }

    const removeCart = ({ }) => {
        setCart([]);
        localStorage.removeItem('carrito')
    }

    useEffect(() => localStorage.setItem('carrito', JSON.stringify(cart)), [cart])

    return (
        <CartContext.Provider value={{
            accountUser,
            login,
            logout,

            cart,
            addProduct,
            removeCart,
            removeProduct
        }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const UseCartContext = () => useContext(CartContext)



export const ars = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0
});