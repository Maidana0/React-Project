import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillQuestionCircle, AiOutlineQuestionCircle } from 'react-icons/ai';
import {ars} from '../cart/itemList';

import data from './data.json'


 const Item = ()=>{
    const [contador, setContador] = useState(1)
    const stock = 5
    const sumar = ()=>{ stock>contador ? setContador (contador + 1) : console.log('No hay stock')}    
    const restar = ()=>{ contador > 0 ? setContador (contador -1) : console.log ('No puede restar menos que 0')}


    return(

            <div className="producto">
                <div className="prod-img">
                    <img src={require('./images/sanji/sanji-kid.jpg')} />
                </div>

                <div className="prod-info">
                    <div className="nombre-prod">Producto 1</div>
                    <div className="precio-prod">{ars.format(5000)}</div>
                </div>

                <div className="detalles-prod"> 
                Este producto se caracteriza pro su peculiar forma de reveer las cosas we nose
                </div>


                <div className='cont-prod'>
                    <button onClick={restar}><AiOutlineMinus className='btn-cont'  /></button> 
                    {contador}
                    <button onClick={sumar}><AiOutlinePlus className='btn-cont' /></button> 
                </div>

                <button className='agregar-carrito'>AGREGAR AL CARRITO </button>
            </div>

        
    )
}

export const Product = ()=>{
    return(
        <div className='category-container'>
            <div className='lista-productos'>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    )
}
export default Product











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

//     const [contador, setContador] = useState(1)
//     const stock = props.stock
//     const sumar = ()=>{ stock>contador ? setContador (contador + 1) : console.log('No hay stock')}    
//     const restar = ()=>{ contador > 0 ? setContador (contador -1) : console.log ('No puede restar menos que 0')}


//     return (
//         <div className="producto">             <div className="prod-info">
//                 <div className="nombre-prod">{props.nombre}</div>
//                 <div className="precio-prod">{f.format(props.precio)}</div>
//             </div>

//             <div className='cont-prod'>
//                 <button onClick={restar}><AiOutlineMinus className='btn-cont'  /></button> 
//                 {contador}
//                 <button onClick={sumar}><AiOutlinePlus className='btn-cont' /></button> 
//             </div>

        
//             <button className='agregar-carrito'>AGREGAR AL CARRITO </button>
        
//         </div>
//     )
// }




// export const Lista = (props) =>{

//     return (
//         <div className="lista-productos">
//             {props.content}
//         </div>
        
//     )
// }




