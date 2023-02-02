import { Toastify } from './Toast'
import { UseCartContext } from '../../cart/components/CartContext';
import AddToFav from './AddToFav';


export const AddToList = (props) => {
    const { imagen, cantidad, id, precio, nombre, categoria, detalles,itemCompleto } = props
    const { cart, addProduct } = UseCartContext()
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

        Toastify('Producto agregado a Favoritos!')
        localStorage.setItem('carrito', JSON.stringify(cart))
    }

  
    return (
        <div className='contenedorDeBotones'>

            <AddToFav 
            item={itemCompleto}
            id={id}
            />

            <button className='agregar-carrito'
                onClick={addToCart}>
                AGREGAR AL CARRITO
            </button>
        </div>
    )
}
export default AddToList



