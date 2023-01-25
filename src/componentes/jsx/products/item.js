import { useState } from 'react';
import { Link } from 'react-router-dom';

import Contador from './components/Contador.js';
import AddToList from './components/AddToList';


import { ars } from '../cart/components/CartContext';

export const Item = (props) => {
    const [contador, setContador] = useState(1)
    const {classe, mostrarDetalles, close, img, nombre, category, precio, id, detalles, stock} = props

    return (
        <div className={`producto ${classe ? classe : ""}`}>
            {mostrarDetalles ? close : ` `}

            <div className="prod-img">
                <img src={require(`${img}`)} alt={"imagen del " + nombre} />
            </div>

            <div className="prod-info">
                <div className="nombre-prod">{nombre} {mostrarDetalles && `|| ${category}`}</div>
                <div className="precio-prod">{ars.format(precio)}</div>
            </div>

            <Link className="detalles-prod" to={`/${category}/product/${id}`}>
                {mostrarDetalles ? detalles : "Mostrar Detalles"}
            </Link>

            <div className='btn-prod-cart'>
                <Contador
                    stock={stock}
                    cont={contador}
                    setcont={setContador}
                />
                {mostrarDetalles
                    ? <div className='stock'>Stock: {stock}</div>
                    : ` `
                }
                <AddToList
                    cantidad={contador}
                    id
                    precio
                    nombre
                    categoria
                    detalles
                />
            </div>

        </div>


    )
}

export const Productos = (props) => {
    return (
        <div className='category-container'>

            <img className='img-title' alt={props.title} src={require(`../../images/${props.image}`)} />
            <div className="container-title">
                <h1 className="title">{props.title}</h1>
            </div>

            <div className='lista-productos'>
                {props.list}
            </div>

        </div>
    )
}
