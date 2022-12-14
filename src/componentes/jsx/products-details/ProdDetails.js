import { Item } from "../products/item"


export const ItemDetails = ()=>{
    return(
        <Item 
        id={1} 
        img={'./images/sanji/sanji-3.jpg'}
        nombre={'Sanji Mejor Producto'}
        precio={ 550}
        stock={ 10 }
        detalles= {'aqui podemos observar lo grande que la tiene sanji xd'}
        class= {'detalles'}
        mostrarDetalles= {true}
        />
    )
}
