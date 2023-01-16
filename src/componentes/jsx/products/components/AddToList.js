import {Toastify} from './Toast'
import { useContext } from 'react';
import CartContext from '../../cart/CartContext';


export const AddToList =  (props) => {
    const { cantidad, id, precio, nombre, categoria, detalles } = props

    const {cart, addProduct} = useContext(CartContext)

    const addToCart = () => {
        const repetido = cart.some(productito => productito.id === id)


        if (repetido) {
            const este = cart.find(prod => prod.id === id)
            este.cantidad += cantidad
            este.total += precio * cantidad
        } else {
            const item = {
                nombre,
                precio,
                cantidad,
                total: precio * cantidad,
                id,
                detalles,
                categoria
            }
            addProduct(item)
        }

        Toastify()
        console.log(cart)
        localStorage.setItem ('carrito', JSON.stringify (cart) )
    }


    return (
        <button className='agregar-carrito'
            onClick={addToCart}>
            AGREGAR AL CARRITO
        </button>

    )
}
export default AddToList



