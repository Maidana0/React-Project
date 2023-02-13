import { useState } from 'react'
import { ListProducts } from '../../../firebase/config'
import { Item } from "../products/item";



const List = ({category}) => {
    
    const [lista, setLista] = useState(false)
    // useEffect(() => {
    //     return async () => {
    //         const lista = await ListProducts(`${category}List`)
    //         setLista(lista)
    //     }
    // }, []) arreglado xd, esto era por lo q no me cargaban los productos, solo se renderizaba en el maquetado

    
    if (!lista){
        ListProducts(`${category}List`)
        .then(data => setLista(data))
    }

    return (
        lista
            ?
            lista.map(record => {
                return (
                    <Item
                        itemCompleto={record}
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