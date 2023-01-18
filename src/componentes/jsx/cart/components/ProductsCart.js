import { ButtonsCart } from './Buttons';
import { ars, UseCartContext } from './CartContext.js';
import ProductsinCart from './ProductsinCart';

const ProductsCart = () => {
    const { cart, removeCart } = UseCartContext()
    const priceTotal = cart.reduce((acc, item) => acc += item.total, 0)
    const quantityTotal = cart.reduce((acc, item) => acc += item.cantidad, 0)


    return (
        <>

            <ProductsinCart />
            <div className='results'>
                <div className="cart-result">
                    Cantidad de Productos: <strong>{quantityTotal}</strong>
                </div>

                <div className="cart-result">
                    Precio Total: <strong>{ars.format(priceTotal)}</strong>
                </div>
            </div>


            <ButtonsCart
                remove={removeCart}
                finish={() => console.log("Compra Terminada!")}
            />





        </>)
}

export default ProductsCart