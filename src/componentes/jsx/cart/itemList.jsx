import { UseCartContext } from './components/CartContext';
import EmptyCart from "./components/EmptyCart";
import ProductsCart from "./components/ProductsCart";

import { Link } from 'react-router-dom';

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

            <Link
                style={{ textDecoration: 'underline', margin: '1rem auto',
                        fontWeight:600, color:'white', backgroundColor:'black',
                    padding:'10px 15px', border:'solid 1px white', borderRadius:12, boxShadow:'0 0 12px 3px black' }}
                to={'/order'}>Buscar mi Orden</Link>
        </div>
    </>)
}


