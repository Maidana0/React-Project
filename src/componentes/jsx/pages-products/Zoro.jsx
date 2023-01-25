import { Item, Productos } from "../products/item";
import { ListProducts } from "../../../firebase/config";
import { useEffect, useState } from "react";


 const ZoroItemList = ()=>{
    const [lista, setLista] = useState(false)
    useEffect(()=>{
        return async()=> {
            const lista = await ListProducts('zoroList')
            setLista(lista)
        }
    },[])




        return (
            lista ? 
            lista.map ( record => {
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
            :           
            <img className='gif gif-sanji'
             src={require('../../images/loading-sanji.gif')} />
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