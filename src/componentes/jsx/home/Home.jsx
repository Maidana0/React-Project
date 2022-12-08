import { AiFillCaretDown , AiFillCaretUp} from 'react-icons/ai';
import { useState } from 'react'

const Seccion = (props)=>{
    return(
        <a className="seccion container-title">
            <h1 className="title"> {props.titulo} </h1>
            <img className='img-title' src={props.portada}/>    
          </a>
    )
}
const Secciones =()=>{
    return(<>        
        <Seccion
        portada={require('../../imagenes/sanji.jpg')}
        titulo='Vinsmoke Sanji'
        />
        <Seccion
        portada={require('../../imagenes/usopp.jpg')}
        titulo='God Usopp'
        /> 
        <Seccion 
        portada={require('../../imagenes/zoro.jpg')}
        titulo='Roronoa Zoro'
        />
    </>)
}
const List = ()=>{
    const [list, setList] = useState(<img className='gif' src={require('../../imagenes/loading.gif')}/>)
    setTimeout(()=>{ setList ( <Secciones/>)}, 1500);    
    return (list)
}

const Welcome = ()=>{
    const [welc, setWelc] = useState (<img className='gif' src={require('../../imagenes/load.webp')}/>)
    
    setTimeout(()=>{ setWelc (()=>{
        return(
        <div className='home-content'>
            <h1 className='home-title'>Bienvenido a nuestro sitio web</h1>
            <p> Se trata de un Proyecto Ecommerce creado con React JS con el objetivo de poner en practica lo aprendido.</p>
            <img className='home-img' src={require('../../imagenes/sanji2.jpg')} />
        </div>)
    })}, 1900);    

    return(welc)
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
            {/* <img className='gif' src={require('../../imagenes/sanji.gif')} /> */}
        </div>
        </>
    )
}

export default Home