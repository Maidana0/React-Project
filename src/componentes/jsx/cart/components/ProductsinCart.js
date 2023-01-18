import { UseCartContext, ars} from './CartContext';
import { BtnProductInCart } from './Buttons';

const ProductsinCart = () => {
    const { cart,removeProduct } = UseCartContext()
    return(
        cart.map(prod => {
            return (
                <div className="cart-item" key={prod.id}>
                    <h3>{prod.nombre} / {prod.categoria}</h3>
                    <p>{prod.cantidad}</p>
                    <p>{ars.format(prod.total)}</p>

                    <BtnProductInCart 
                    removeProduct={removeProduct}
                    id = {prod.id}
                    
                    />
                </div>
            )
        })
    )
}




export default ProductsinCart