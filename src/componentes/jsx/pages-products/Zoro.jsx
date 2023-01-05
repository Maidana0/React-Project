import { Item, Productos } from "../products/item";
import data from "../products/data.json"



 const ZoroItemList = ()=>{
        return (
            data.zoro.map ( record => {
            return (
                <Item
                category="zoro"
                key={record.id}
                id={record.id} 
                img={record.imagen}
                nombre={record.nombre}
                precio={record.precio}
                stock={record.stock}
    
                mostrarDetalles= {false}
                detalles= {record.detalles}
                />
            )
            } )
        )
}

export const ZoroCategory =()=>{
    window.scrollTo(0, 0)
    return(

        <Productos 
        title= {'Roronoa Zoro'}
        image= {'zoro.jpg'}
        list= {<ZoroItemList/>}
        />
    )
}
export default ZoroCategory