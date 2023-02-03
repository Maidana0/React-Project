import { Ordenes } from "../../firebase/config"
import { useState, useEffect } from "react"
const SeguirOrden = () => {
    const [listaOrdenes, setListaOrdenes] = useState(false)

    const [ordenInput, setOrdenInput] = useState({ email: '', order: '' })

    const [userOrder, setUserOrder] = useState(false)

    useEffect(() => {
        return async () => {
            const lista = await Ordenes()
            setListaOrdenes(lista)
        }
    }, [])




    const handleOrderChange = (e) => {
        setOrdenInput({
            ...ordenInput,
            [e.target.name]: e.target.value,
        })
    }


    return (
        <>
            <form
                style={{ display: 'flex', flexDirection: 'column', margin: '1rem auto', gap: '10px', width: '300px' }}
                onSubmit={async e => {
                    e.preventDefault()
                    const buscar = listaOrdenes.find(us => us.client.email == ordenInput.email)
                    setUserOrder(buscar)
                }}>
                <input
                    value={ordenInput.email} onChange={handleOrderChange}
                    type='email' name="email" required placeholder="Escriba su Email" />
                <input
                    value={ordenInput.order} onChange={handleOrderChange}
                    type='text' name="order" required placeholder='Codigo de Orden' />


                <button type="submit"> Buscar Orden</button>
            </form>
            <br />
            {
                userOrder ?

                    userOrder.items.map(prod => {
                        return (

                            <div key={prod.id}>
                                <hr />
                                <br />
                                Nombre del producto: {prod.nombre} //
                                Categoria: {prod.categoria}
                                <br />
                                Detalles: {prod.detalles}
                                <br />
                                Precio Unitario: {prod.precio} ////
                                Cantidad: {prod.cantidad} ////
                                Total: {prod.total}
                                <br />
                                <br />

                                <hr />
                                <br />

                            </div>


                        )
                    })
                    : <span>Encuentra tu orden...</span>
            }
        </>
    )
}










export default SeguirOrden