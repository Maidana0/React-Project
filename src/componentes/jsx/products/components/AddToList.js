import {Toastify } from './Toast'
import {UseCartContext} from '../../cart/components/CartContext';


export const AddToList =  (props) => {
    const { imagen, cantidad, id, precio, nombre, categoria, detalles } = props
    const {cart, addProduct} = UseCartContext()

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
                categoria,
                imagen
            }
            addProduct(item)
        }

        Toastify()
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



