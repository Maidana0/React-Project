import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';



export const Contador = (props) => {

    const sumar = ()=>{ 
        props.stock>props.cont ? props.setcont (props.cont + 1) : console.log('No hay stock')
    }    
    const restar = ()=>{ 
        props.cont > 1 ? props.setcont (props.cont -1) : console.log ('No puede restar menos que 0')
    }


  return (
        <div className='cont-prod'>
                <button onClick={restar}>
                    <AiOutlineMinus className='btn-cont'  />
                </button> 
                        {props.cont}
                <button onClick={sumar}>
                    <AiOutlinePlus className='btn-cont' />
                </button> 
        </div>
    )
     

}
export default Contador