import { useState, useEffect } from 'react'
import { ListProducts } from '../../../firebase/config'
import { Item } from "../products/item";



const List = ({category}) => {
    const [lista, setLista] = useState(false)
    useEffect(() => {
        return async () => {
            const lista = await ListProducts(`${category}List`)
            setLista(lista)
        }
    }, [])
    
    return (
        lista
            ?
            lista.map(record => {
                return (
                    <Item
                        category={category}
                        key={record.id}
                        id={record.id}
                        img={record.imagen}
                        nombre={record.nombre}
                        precio={record.precio}
                        stock={record.stock}

                        mostrarDetalles={false}
                        detalles={record.detalles}
                    />
                )
            })
            :
            <img className='gif gif-sanji'
                src={require('../../images/loading-sanji.gif')}
            />
    )
}



export default List