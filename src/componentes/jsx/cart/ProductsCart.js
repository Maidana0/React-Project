import { useContext } from 'react'
import CartContext from './CartContext';
import { ars } from './ItemList';


const ProductsCart = () => {
    const {cart} = useContext(CartContext)

    return (
        <>
            {cart.map(prod => {
                return (
                    <div className="cart-item" key={prod.id}>
                        <h3>{prod.nombre}</h3>
                        <p>{prod.cantidad}</p>
                        <p>{prod.total}</p>
                    </div>
                )
            })}



            <div className="cart-result">
                Total {ars.format(2462)}
            </div>
        </>)
}

export default ProductsCart