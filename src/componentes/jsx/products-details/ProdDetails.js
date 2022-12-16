import { Item } from "../products/item"
import { AiOutlineCloseCircle } from 'react-icons/ai';


export const ItemDetails = ()=>{

    const CloseDetails =()=><AiOutlineCloseCircle className='close-circle'/>
    
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
