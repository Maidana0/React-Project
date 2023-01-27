import { ars } from './CartContext';
import { BtnProductInCart } from './Buttons';
import { useState } from 'react';

const CartItem = (props) => {
    const { prod, removeProduct } = props
    const [details, setDetails] = useState(false)

    return (
        
        <div className={`cart-item ${!details ?'details':'details-active'}`}>

            <h3>{prod.nombre} / {prod.categoria}</h3>
            <p>{prod.cantidad}</p>
            <p>{ars.format(prod.total)}</p>


            <BtnProductInCart
                setDetails={setDetails}
                details={details}

                removeProduct={removeProduct}
                id={prod.id}
            />
        </div>
    )
}

export default CartItem