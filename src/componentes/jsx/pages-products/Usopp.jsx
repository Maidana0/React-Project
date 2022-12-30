import { Item, Productos } from "../products/item";
import data from "../products/data.json"

import { total } from "../products/item";


 const UsoppItemList = ()=>{
        return (
            data.usopp.map ( record => {
            return (
                <Item
                category="usopp"
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

export const UsoppCategory =()=>{
    return(

        <Productos 
        title= {'God Usopp'}
        image= {'usopp.jpg'}
        list= {<UsoppItemList/>}
        />
    )
}
export default UsoppCategory
