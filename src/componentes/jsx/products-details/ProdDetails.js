import { Item } from "../products/item"
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { NavLink} from 'react-router-dom';


export const ItemDetails = ()=>{

    const CloseDetails =()=>{return(
        <NavLink /*end to={`/${props.category}`} */ >
            <AiOutlineCloseCircle className='close-circle'/>
        </NavLink>
    )}
    
    return(
        <Item 
        id={1} 
        img={'./images/sanji/sanji-3.jpg'}
        nombre={'Sanji Mejor Producto'}
        precio={ 550}
        stock={ 10 }
        detalles= {'aqui podemos observar lo grande que la tiene sanji xd'}

        class= {'detalles'}
        mostrarDetalles= {true}
        close= { <CloseDetails/>}
        />
    )
}
