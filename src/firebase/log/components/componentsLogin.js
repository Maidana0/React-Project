import { NavLink } from 'react-router-dom'
import { Password } from './Password'

export const Logueado = () => {
    return (
        <>
            <img className="sucess" src={require('../../../componentes/images/sucess.png')} />

            <NavLink className='sucess-a' to='/cart'> Ir al Carrito </NavLink>
        </>
    )
}

export const Header = ({ logg }) => {
    return (<>
        <h2 style={{ borderRadius: "8px", borderBottom: "solid 5px yellow" }}>
            {!logg ? 'Iniciar Sesión' : 'Ya accediste a tu usuario'}
        </h2>
    </>)
}


// FORMULARIO EN LOG IN
const ImgLog = () => {
    return <img src={require('../../../componentes/images/sanji-a.jpg')}
        style={{ marginTop: '1rem', width: "149px", borderRadius: '100%' }} />
}


const ToRegister = () =>
    <NavLink to={'/account/register'}>
        ¿No estas registrado?
    </NavLink>


const PersistentLogin = () => {
    return (
        <label className='persistentLogin'>Mantener la sesión abierta
            <input type='checkbox' name='persistentLogin' />
        </label> //por ahora lo dejo de adorno xd pero tmb lo tengo que configurar
    )

}
// ELEMENTOS JUNTOS
export const FormLogin = ( { handleSubmit, user,handleInputChange, error } ) => {
    return (<>
        <ImgLog />

        <form id='login' onSubmit={handleSubmit}>
            <input
                value={user.email} onChange={handleInputChange}
                className='email' autoComplete='user-email' name='email'
                placeholder='Correo electronico*' type='email' required />

            <Password
                values={user.currentPassword} inputChange={handleInputChange}
                id={'current'} />

            <PersistentLogin />

            {
                error.error && <span className='span'>{error.msj}</span>
            }

            <NavLink>¿Has olvidado tu contraseña?</NavLink> 
            {/* // DESPUES PONDRE LO DE FIREBASE... algun dia we*/}

            
            {/* // BOTON DE INGRESAR CON FACE Y GOOGLE */}

            <button type='submit'>Ingresar</button>
        </form>

        <ToRegister />
    </>)
}