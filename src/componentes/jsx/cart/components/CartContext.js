import { createContext, useState, useEffect, useContext } from "react";
import { AccountLogOut } from "../../../../firebase/config";

import Swal from "sweetalert2";

export const CartContext = createContext()


export const CartProvider = ({ children }) => {
    // LIST FAV
    const favStorage = JSON.parse(localStorage.getItem('favList')) || []
    const [fav, setFav] = useState(favStorage)
    const addToFav = item => setFav([...fav, item])
    const deleteToFav = id => setFav(fav.filter(prod => prod.id !== id))



    // USER LOG

    const account = JSON.parse(localStorage.getItem('account')) ||
    {
        email: '',
        logged: false,
    }


    const [accountUser, setAccountUser] = useState(account)

    const login = (data) => {
        setAccountUser(
            {
                email: data,
                logged: true,
            }
        )
    }

    const logout = () => {
        Swal.fire({
            title: '¿Seguro que quieres cerrar tu sesión?',
            text: 'Para finalizar tu compra que iniciar sesión nuevamente.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'No, cancelar!',
            confirmButtonText: 'Si, quiero cerrarla!!'
        }).then((result) => {
            if (result.isConfirmed) {
                AccountLogOut(setAccountUser)
                Swal.fire(
                    'Listo!',
                    'Se ha desconectado con exito!',
                    'success'
                )
            }
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
    const finishCart = (ordenId) => {
        Swal.fire({
            title: 'Desea terminar su compra?',
            text: 'Se creara una orden con los datos de su compra.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'No, aun no!',
            confirmButtonText: 'Si, quiero hacerlo!'
        }).then((result) => {
            if (result.isConfirmed) {
                setCart([]);
                localStorage.removeItem('carrito');
                Swal.fire(
                    'Su compra ha sido exitosa!',
                    `Su numero de orden es: ${ordenId}`,
                    'success'
                )
            }
        })
    }

    const removeCart = () => {
        Swal.fire({
            title: 'Desea continuar?',
            text: 'Borrara todos los productos dentro del carrito',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'No, cancelar!',
            confirmButtonText: 'Si, quiero vaciarlo!'
        }).then((result) => {
            if (result.isConfirmed) {
                setCart([]);
                localStorage.removeItem('carrito');
                Swal.fire(
                    'Listo!',
                    'Carrito vacio.',
                    'success'
                )
            }
        })


    }

    useEffect(() => localStorage.setItem('account', JSON.stringify(accountUser)), [accountUser])
    useEffect(() => localStorage.setItem('favList', JSON.stringify(fav)), [fav])
    useEffect(() => localStorage.setItem('carrito', JSON.stringify(cart)), [cart])

    return (
        <CartContext.Provider value={{
            fav,
            addToFav,
            deleteToFav,

            accountUser,
            login,
            logout,

            cart,
            addProduct,
            removeCart,
            removeProduct,
            finishCart

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