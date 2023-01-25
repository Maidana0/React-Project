import { Item, Productos } from "../products/item";
import { ListProducts } from "../../../firebase/config";
import { useEffect, useState } from "react";
    



 const SanjiItemList =  ()=>{
    const [lista, setLista] = useState(false)
    useEffect(()=>{
        return async()=> {
            const lista = await ListProducts('sanjiList')
            setLista(lista)
        }
    },[])



        return (
            lista ? 
            lista.map ( record => {
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
            :           
            <img className='gif gif-sanji'
             src={require('../../images/loading-sanji.gif')} />
        )
}

export const SanjiCategory =()=>{
    window.scrollTo(0, 0)
    return(

        <Productos 
        title= {'Vinsmoke Sanji'}
        image= {'sanji.jpg'}
        list= {<SanjiItemList/>}
        />
    )
}
export default SanjiCategory