import { useState } from 'react';
import { Link } from 'react-router-dom';

import Contador from './components/Contador.js';
import AddToList from './components/AddToList';


import { ars } from '../cart/ItemList';

export const Item = (props) => {
    const [contador, setContador] = useState(1)

    return (
        <div className={`producto ${props.class ? props.class : ""}`}>
            {props.mostrarDetalles ? props.close : ` `}

            <div className="prod-img">
                <img src={require(`${props.img}`)} alt={"imagen del " + props.name} />
            </div>

            <div className="prod-info">
                <div className="nombre-prod">{props.nombre}</div>
                <div className="precio-prod">{ars.format(props.precio)}</div>
            </div>

            <Link className="detalles-prod" to={`/${props.category}/product/${props.id}`}>
                {props.mostrarDetalles ? props.detalles : "Mostrar Detalles"}
            </Link>

            <div className='btn-prod-cart'>
                <Contador
                    stock={props.stock}
                    cont={contador}
                    setcont={setContador}
                />
                {props.mostrarDetalles
                    ? <div className='stock'>Stock: {props.stock}</div>
                    : ` `
                }
                <AddToList
                    cantidad={contador}
                    id={props.id}
                    precio={props.precio}
                    nombre={props.nombre}
                    categoria={props.category}
                />
            </div>

        </div>


    )
}

export const Productos = (props) => {
    return (
        <div className='category-container'>

            <img className='img-title' src={require(`../../images/${props.image}`)} />
            <div className="container-title">
                <h1 className="title">{props.title}</h1>
            </div>

            <div className='lista-productos'>
                {props.list}
            </div>

        </div>
    )
}
