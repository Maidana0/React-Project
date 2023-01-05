import { Item, Productos } from "../products/item";
import data from "../products/data.json"



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
    window.scrollTo(0, 0)
    return(

        <Productos 
        title= {'God Usopp'}
        image= {'usopp.jpg'}
        list= {<UsoppItemList/>}
        />
    )
}
export default UsoppCategory
