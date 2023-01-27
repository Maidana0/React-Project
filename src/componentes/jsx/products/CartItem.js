import { ars } from '../cart/components/CartContext';
import { BtnProductInCart } from '../cart/components/Buttons';
import { useState } from 'react';

const CartItem = (props) => {
    const { prod, removeProduct } = props
    const [details, setDetails] = useState(false)
    return (

        <div className={`cart-item ${!details ? 'details' : 'details-active'}`}>

            <div className='item-header'>
                <h3>{prod.nombre}</h3>
                <h3>Categoria: {prod.categoria}</h3>
            </div>

            <div className='info'>
                <div>
                    <h3>Descripcion:</h3>
                    <p>{prod.detalles}</p>
                </div>
                <img src={require(`${prod.imagen}`)} alt={"imagen del " + prod.nombre} />
            </div>

            <div className='items-value'>
                <span>Cantidad de objetos: </span>
                <p>{prod.cantidad}</p>
            </div>
            <div className='items-value'>
                <span>Precio Unitario: </span>
                <p>{ars.format(prod.precio)}</p>
            </div>
            <div className='items-value'>
                <span>Precio Total: </span>
                <p>{ars.format(prod.total)}</p>
            </div>




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