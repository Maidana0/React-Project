import { Password } from "./Password"
import { useState } from "react"
import { Checkbox, Date, AlreadyRegistered } from "./componentsRegister"



const Register = () => {
  const [user, setUser] = useState({userName:null,userPassword:null})
  
  return (
    <>
      <div className='contain acc'>
        <h2
          style={{ padding: "1px 25px", borderRadius: "8px", borderBottom: "solid 5px yellow" }}               >Registrar nuevo usuario</h2>

        <form id="register">
          <h3>Datos Personales</h3>

          <input type="text" name="name" placeholder="Ingrese su nombre" required />
          <input type="text" name="lastName" placeholder="Ingrese su apellido" required />

          <Date/>
          <Checkbox />
          <h3>Datos de Ingreso</h3>

          <input autoComplete='user-name' type="email" name="email" placeholder="Ingrese su correo electronico" required />
          <Password id="new" />


          <button type='submit'>Registrarse</button>

        </form>
        <AlreadyRegistered />
      </div>
    </>
  )
}

export default Register