import {UseCartContext} from './components/CartContext';
import EmptyCart from "./components/EmptyCart";
import ProductsCart from "./components/ProductsCart";

export const ItemList = () => {
    const { cart } = UseCartContext()

    return (<>
        <div className="container-carrito">
            <div className="container-title">
                <h1 className="title"> Carrito <span>de compras</span> </h1>
            </div>

            {
                cart.length >= 1
                    ? <ProductsCart />
                    : <EmptyCart />
            }
            
        </div>
    </>)
}


