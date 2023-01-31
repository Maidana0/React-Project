import { Password } from './Password';
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className='contain acc'>

      <h2
        style={{ padding: "1px 25px", borderRadius: "8px", borderBottom: "solid 5px yellow" }}>
        Iniciar Sesión</h2>
        <img src={require('../../../componentes/images/sanji-a.jpg')}
        style={{marginTop:'1rem', width:"149px", borderRadius:'100%'}}/>
      
      <form id='login'>
        <input className='user' autoComplete='user-name' name='user' placeholder='Correo electronico*' type='email' required/>

        <Password id={'current'}/>

       
          <label className='persistentLogin'>Mantener la sesión abierta
          <input type='checkbox' name='persistentLogin' />
          </label>
          
        

        <a>¿Has olvidado tu contraseña?</a>
                {/* // BOTON DE INGRESAR CON FACE Y GOOGLE */}

        <button type='submit'>Ingresar</button>
      </form>
      <Link to={'/account/register'}>
      ¿No estas registrado?
    </Link> 
    </div>
      )
}

export default Login