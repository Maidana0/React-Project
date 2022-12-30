import { Item, Productos } from "../products/item";
import data from "../products/data.json"
import { total } from "../products/item";




 const SanjiItemList = ()=>{
        return (
            data.sanji.map ( record => {
            return (
                <Item
                category="sanji"
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

export const SanjiCategory =()=>{
    return(

        <Productos 
        title= {'Vinsmoke Sanji'}
        image= {'sanji.jpg'}
        list= {<SanjiItemList/>}
        />
    )
}
export default SanjiCategory