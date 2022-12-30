import { ars } from '../../cart/ItemList';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const total = []

export const AddToList = (props) => {
    const { cantidad, id, precio, nombre, categoria } = props

    const mensajito = () => {
        toast.success('Agregado al Carrito!', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
            style: {
                color: "yellow",
                borderRadius: "18px",
                fontWeight: "600",
                fontSize: ".85em",
            }
        });
    }

    const addToCart = () => {
        const repetido = total.some(productito => productito.id === id)


        if (repetido) {
            const este = total.find(prod => prod.id === id)
            este.cantidad += cantidad
            este.total += precio * cantidad
        } else {
            const item = {
                nombre,
                precio: ars.format(precio),
                cantidad,
                total: precio * cantidad,
                id,
                categoria
            }

            total.push(item)

        }

        mensajito()
        console.log(total)
        // localStorage.setItem ('carrito', JSON.stringify (total) ) ESTE NO ES ASI XD
    }


    return (
        <button className='agregar-carrito'
            onClick={addToCart}>
            AGREGAR AL CARRITO
        </button>

    )
}
export default AddToList



