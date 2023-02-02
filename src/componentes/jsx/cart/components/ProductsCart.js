import { ButtonsCart } from './Buttons';
import { ars, UseCartContext } from './CartContext.js';
import {handleClickFinish} from './Finish';
import ProductsinCart from './ProductsinCart';

import { DataUserList } from "../../../../firebase/config"

    


const ProductsCart = () => {
    const { cart, removeCart, removeProduct, accountUser, finishCart } = UseCartContext()

    const priceTotal = cart.reduce((acc, item) => acc += item.total, 0)
    const quantityTotal = cart.reduce((acc, item) => acc += item.cantidad, 0)

    const lista = DataUserList()
    
    const finish = ()=>{
        handleClickFinish(accountUser,cart,priceTotal, lista, finishCart)

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
                log={accountUser}
            />





        </>)
}

export default ProductsCart