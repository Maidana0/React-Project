import CartItem from '../../products/CartItem'

const ProductsinCart = ({ cart, removeProduct, precioTotal, productosTotal }) => {
    return (
        <>
            {
                cart.map(prod => {
                    return <CartItem
                        key={prod.id}
                        prod={prod}
                        removeProduct={removeProduct}
                    />
                })
            }
            <div className='results'>
                <div className="cart-result">
                    Cantidad de Productos: <strong>{productosTotal}</strong>
                </div>

                <div className="cart-result">
                    Precio Total: <strong>{precioTotal}</strong>
                </div>
            </div>

        </>


    )
}
export default ProductsinCart