import { Item, Productos } from "../products/item";
import { ListProducts } from "../../../firebase/config";
import { useEffect, useState } from "react";



 const UsoppItemList = ()=>{
    const [lista, setLista] = useState(false)
    useEffect(()=>{
        return async()=> {
            const lista = await ListProducts('usoppList')
            setLista(lista)
        }
    },[])




        return (
            lista ? 
            lista.map ( record => {
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
            :           
            <img className='gif gif-sanji'
             src={require('../../images/loading-sanji.gif')} />
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
