


export const ars = new Intl.NumberFormat ('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0
});

export const ItemList = ()=>{

    return (<>
    <div className="container-carrito">
        <div className="container-title">
            <h1 className="title"> Carrito de compras </h1>
        </div>
    

        <div className="cart-item">
            Producto 9
        </div>
            

        <div className="cart-result">
            Total {ars.format(2462)}
        </div>


    </div>       
    </>)
}


