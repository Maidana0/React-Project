import { Item, Productos } from "../products/item";
import data from "../products/data.json"

import { total } from "../products/item";


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
    return(

        <Productos 
        title= {'Roronoa Zoro'}
        image= {'zoro.jpg'}
        list= {<ZoroItemList/>}
        />
    )
}
export default ZoroCategory