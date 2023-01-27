import { ButtonsCart } from './Buttons';
import { ars, UseCartContext } from './CartContext.js';
import ProductsinCart from './ProductsinCart';

const ProductsCart = () => {
    const { cart, removeCart, removeProduct } = UseCartContext()
    const priceTotal = cart.reduce((acc, item) => acc += item.total, 0)
    const quantityTotal = cart.reduce((acc, item) => acc += item.cantidad, 0)

    return (
        <>
            <ProductsinCart
                cart={cart}
                removeProduct={removeProduct}
                productosTotal={quantityTotal}
                precioTotal={ars.format(priceTotal)}
            />

            <ButtonsCart
                remove={removeCart}
                finish={() => console.log("Compra Terminada!")}
            />





        </>)
}

export default ProductsCart