import { ButtonsCart } from './Buttons';
import { ars, UseCartContext } from './CartContext.js';
import {handleClickFinish} from './Finish';
import ProductsinCart from './ProductsinCart';


const ProductsCart = () => {
    const { cart, removeCart, removeProduct, accountUser } = UseCartContext()
    const priceTotal = cart.reduce((acc, item) => acc += item.total, 0)
    const quantityTotal = cart.reduce((acc, item) => acc += item.cantidad, 0)
    
    
    const finish = ()=>{
        handleClickFinish(accountUser)
    }


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
                finish={finish}
            />





        </>)
}

export default ProductsCart