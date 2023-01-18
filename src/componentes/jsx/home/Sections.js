import { NavLink } from 'react-router-dom'

const Seccion = (props)=>{
    return(
        <NavLink className="seccion container-title" to={props.link} end>
            <h1 className="title"> {props.titulo} </h1>
            <img className='img-title' src={props.portada}/>    
        </NavLink>
    )
}
 const Secciones =()=>{
    return(<>        
        <Seccion
        portada={require('../../images/sanji.jpg')}
        titulo='Vinsmoke Sanji'
        link= '/sanji'
        />
        <Seccion
        portada={require('../../images/usopp.jpg')}
        titulo='God Usopp'
        link= '/usopp'
        /> 
        <Seccion 
        portada={require('../../images/zoro.jpg')}
        titulo='Roronoa Zoro'
        link= '/zoro'
        />
    </>)
}

export default Secciones