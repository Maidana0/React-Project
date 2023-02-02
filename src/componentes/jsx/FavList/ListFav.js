import { Item } from '../products/item'

const ListFav = ({lista}) => {
    return (

        lista.length > 0 ?
            <div className='lista-productos'>
                {
                    lista.map(record => {
                        return (
                            <Item
                                itemCompleto={record}
                                category={record.category}
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
                }
            </div>
            :
            <div className="contain acc">
                <h2>Tu lista esta vacia</h2>
                <img src={require('../../images/sanji-circle.png')} />
            </div>

    )
}

export default ListFav