import { Ordenes } from "../../firebase/config"
import { useState } from "react"
import { Link } from "react-router-dom"
const SeguirOrden = () => {
    const [listaOrdenes, setListaOrdenes] = useState(false)

    const [ordenInput, setOrdenInput] = useState({ email: '', order: '' })

    const [userOrder, setUserOrder] = useState(false)

    // useEffect(() => {
    //     return async () => {
    //         const lista = await Ordenes()
    //         setListaOrdenes(lista)
    //     }
    // }, [])

    if (!listaOrdenes) {
        Ordenes()
            .then(data => setListaOrdenes(data))
    }


    const handleOrderChange = (e) => {
        setOrdenInput({
            ...ordenInput,
            [e.target.name]: e.target.value,
        })
    }
    return (
        listaOrdenes ?
            <>
                <h1
                    style={{
                        textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.7)', width: '300px', color: 'yellow',
                        padding: '8px', borderRadius: 60, margin: '2rem auto'
                    }}>Buscar mi Orden</h1>
                <form
                    style={{ display: 'flex', flexDirection: 'column', margin: '1rem auto', gap: '10px', width: '300px' }}
                    onSubmit={async e => {
                        e.preventDefault()
                        const buscar = listaOrdenes.find(us => us.client.email == ordenInput.email && us.id == ordenInput.order)
                        setUserOrder(buscar)
                    }}>
                    <input
                        style={{ padding: '8px', borderRadius: 8 }}
                        value={ordenInput.email} onChange={handleOrderChange}
                        type='email' name="email" required placeholder="Escriba su Email" />
                    <input
                        style={{ padding: '8px', borderRadius: 8 }}
                        value={ordenInput.order} onChange={handleOrderChange}
                        type='text' name="order" minLength={12} required placeholder='Codigo de Orden' />


                    <button type="submit"
                        style={{
                            border: 'solid 1px yellow', borderRadius: 50, padding: '10px', backgroundColor: 'black',
                            color: 'yellow', boxShadow: '0 0 8px 1px black', width: '50%', margin: '0.5rem auto 0', fontWeight: 600
                        }}> Buscar Orden</button>
                </form>
                <br />
                {
                    userOrder ?
                        <div style={{ margin: '0.5rem auto', width: '92%' }}>
                            <h2 style={{ margin: '0 0 2rem' }}>Tu Orden:</h2>
                            {userOrder.items.map(prod => {
                                return (
                                    <div style={{
                                        backgroundColor: 'yellow', borderRadius: '20px',
                                        border: 'solid 2px black',
                                        padding: '15px', display: 'flex',
                                        flexDirection: 'column', gap: '20px',
                                        margin: '2rem auto'
                                    }}

                                        key={prod.id}>
                                        <div style={{
                                            display: 'flex', justifyContent: 'space-evenly', textAlign: 'center',
                                            borderBottom: 'solid 1px black', paddingBottom: '5px', textTransform: 'capitalize',
                                        }}>
                                            <h3>
                                                Nombre del producto: {prod.nombre}
                                            </h3>
                                            <h3>
                                                Categoria: {prod.categoria}
                                            </h3>
                                        </div>

                                        <p style={{ textAlign: 'center' }}>
                                            <strong> Detalles: </strong> {prod.detalles}
                                        </p>
                                        <div style={{
                                            display: 'flex', justifyContent: 'space-evenly', textAlign: 'center',
                                        }}>
                                            <p>
                                                <strong>Precio Unitario: </strong> {prod.precio}
                                            </p>
                                            <p>
                                                <strong>Cantidad:  </strong> {prod.cantidad}
                                            </p>

                                        </div>

                                        <div style={{ width: '100%', alignItems: 'center', display: 'flex', justifyContent: 'center' }} >
                                            <img src={require(`./products/${(prod.imagen).slice(2)}`)}
                                                style={{
                                                    width: '280px', borderRadius: 50
                                                }} />
                                        </div>
                                        <p style={{ textAlign: 'center' }}>
                                            <strong>Total: </strong>  {prod.total}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>

                        : <span style={{ textAlign: 'center' }}>Encuentra tu orden...</span>
                }

                <Link to={'/cart'}
                    style={{
                        textDecoration: 'underline', margin: '1rem auto',
                        fontWeight: 600, color: 'white', backgroundColor: 'black',
                        padding: '10px 15px', border: 'solid 1px white', borderRadius: 12, boxShadow: '0 0 12px 2px black'
                    }}>Volver</Link>
            </>
            :
            <img className='gif gif-sanji'
                src={require('../images/loading-sanji.gif')}
            />
    )
}










export default SeguirOrden