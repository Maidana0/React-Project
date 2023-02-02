import { useState } from "react"
import { UseCartContext } from "../cart/components/CartContext"
import ListFav from "./ListFav"

const FavList = () => {
    const { fav: lista, accountUser } = UseCartContext()
    const [load, setLoad] = useState(false)
    setTimeout(() => {
        setLoad(lista)
    }, 1000);
    return (
        load ?

            <div className='category-container'>
                <img className='img-title' alt={'Lista de Deseos'} src={require(`../../images/sanji-favList.jpg`)} />
                <div className="container-title">
                    <h1 className="title"
                        style={{ textAlign: 'center', padding: '2px 15px' }}
                    >Lista de Productos en Favoritos</h1>
                </div>
                {
                    accountUser.logged ?
                        <ListFav lista={lista} />
                        :
                        <div className="contain acc">
                            <h2>Debes estar Logueado para ver tu lista</h2>
                            <img src={require('../../images/error.png')} />
                        </div>
                }

            </div>
            :
            <img className='gif gif-sanji'
                src={require('../../images/loading-sanji.gif')} />
    )
}

export default FavList