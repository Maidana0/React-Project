import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import {ars} from '../cart/itemList';

import data from './data.json'

 export const Item = (props)=>{
    const [contador, setContador] = useState(1)
    const sumar = ()=>{ props.stock>contador ? setContador (contador + 1) : console.log('No hay stock')}    
    const restar = ()=>{ contador > 1 ? setContador (contador -1) : console.log ('No puede restar menos que 0')}
    

    const addToList = ()=>{
       const item = {
        nombre: props.nombre,
        precio: ars.format( props.precio ),
        cantidad: contador,
        total: ars.format( props.precio * contador )
        }
        console.log(item)
    }


    const Detalles =()=>{
        if(props.mostrarDetalles){
            return  props.detalles
        }else{
            return <>  Mostrar Detalles  </>
        }
    }
    const MostrarStock =()=><div className='stock'>Stock: {props.stock}</div>


    return(
            <div className={`producto ${props.class}`}>
                {props.mostrarDetalles? props.close: ` `}           

                <div className="prod-img">
                    <img src={require (`${props.img}`)} />
                </div>

                <div className="prod-info">
                    <div className="nombre-prod">{props.nombre}</div>
                    <div className="precio-prod">{ars.format(props.precio)}</div>
                </div>

                <div className="detalles-prod"> 

                    <Detalles />

                </div>

                <div className='btn-prod-cart'>
                    <div className='cont-prod'>
                        <button onClick={restar}><AiOutlineMinus className='btn-cont'  /></button> 
                        {contador}
                        <button onClick={sumar}><AiOutlinePlus className='btn-cont' /></button> 
                    </div>
                    {props.mostrarDetalles? <MostrarStock /> : ` `}                   
                    <button className='agregar-carrito' onClick={addToList}>AGREGAR AL CARRITO </button>
                </div>
            </div>

            
    )
}


const ItemList = ()=>{



    return (
        data.sanji.map ( record => {
        return (
            <Item
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
    )
}



export const Productos = ()=>{
    return(
        <div className='category-container'>

            <img className='img-title' src={require('../../imagenes/sanji.jpg')}/>    
            <div className="container-title">
                <h1 className="title"> Sanji Vinsmoke </h1>
            </div>

            <div className='lista-productos'>
                <ItemList />
            </div>

        </div>
    )
}
export default Productos











// export const Titulo = (props) =>{
//     return (
//         <>
//     <img className='img-title' src={props.portada}/>    
//     <div className="container-title">
//         <h1 className="title"> {props.titulo} </h1>
//     </div>
//         </>
//     );
// }


// export const Producto = (props) =>{


