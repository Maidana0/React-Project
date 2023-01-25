import { Item } from "../products/item"
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { NavLink, useParams} from 'react-router-dom';
import Search from "./Search";


export const ItemDetails = ()=>{
    window.scrollTo(0, 0)

    const {category, id} = useParams()

    const producto = Search(category,id)

    const CloseDetails =()=>{return(
        <NavLink end to={`/${category}`}  >
            <AiOutlineCloseCircle className='close-circle'/>
        </NavLink>
    )}
    return(
        producto ?
       
            producto.error? 
            <h1>{producto.error}</h1> //ARREGLAR ESTOOO
            :
            <Item 
            category={category}
            id={producto.id} 
            img={producto.imagen}
            nombre= {producto.nombre }
            precio= {producto.precio }
            stock=  {producto.stock  }
            detalles= {producto.detalles}
            class= {'detalles'}
            mostrarDetalles= {true}
            close= { <CloseDetails/>}
            />

        :
        
        <img className='gif gif-sanji' 
        src={require('../../images/loading-sanji.gif')} 
        />
    )
}
