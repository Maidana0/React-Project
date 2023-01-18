import { AiFillCaretDown , AiFillCaretUp} from 'react-icons/ai';
import { useState } from 'react'
import Secciones from './Sections';

const List = ()=>{
    const [list, setList] = useState(<img className='gif' src={require('../../images/loading.gif')}/>)
    setTimeout(()=>{ setList ( <Secciones/>)}, 1500);    
    return list
}

const Welcome = ()=>{
    // const [welc, setWelc] = useState (<img className='gif' src={require('../../images/load.webp')}/>)
        return(
        <div className='home-content'>
            <h1 className='home-title'>Bienvenido a nuestro sitio web</h1>
            <p> Se trata de un Proyecto Ecommerce creado con React JS con el objetivo de poner en practica lo aprendido.</p>
            <img className='home-img' src={require('../../images/sanji2.jpg')} />
        </div>)
}

const OpenCategory = ()=>{
    return(<>
        <AiFillCaretDown/> <AiFillCaretDown/>
        <p>Desplegar Categorias</p>
        <AiFillCaretDown/> <AiFillCaretDown/>
    </>)
}

const CloseCategory = ()=>{
    return(<>
        <AiFillCaretUp/> <AiFillCaretUp/>
        <p>Cerrar Categorias</p>
        <AiFillCaretUp/> <AiFillCaretUp/>
    </>)
}

export const Home = ()=>{
    window.scrollTo(0, 0)

    const [category, setCategory] = useState(false)
    const [desplegar, setDesplegar] = useState(true)
    const Inicio = ()=>{return( category? <List /> : <Welcome />)}

    const HomeBtn = ()=>{
        const Texto = ()=>{ return (desplegar? <OpenCategory/> : <CloseCategory/>)}
        const click = ()=>{ 
            window.scrollTo(0, 0)
            setDesplegar(!desplegar); 
            setCategory(!category)
        }
        return(<>
            <Inicio />
            <div className='home-btn' onClick={click}>
                <Texto />
            </div>
        </>)
    }

    return (<>
        <div className="home">
            <HomeBtn />
        </div>
        </>
    )
}

export default Home