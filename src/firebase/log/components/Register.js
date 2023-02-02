import { addNewUser, FormularioRegister } from "./componentsRegister"
import { DataUserList } from "../../config";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Register = () => {

  const [registered, setRegistered] = useState(false)
  const [alreadyExist, setAlreadyExist] = useState(false)

  const lista = DataUserList()
  const handleSubmitRegister = (e) => {
    e.preventDefault()
    let sex = ''
    if (e.target[5].checked) sex = e.target[5].value
    if (e.target[6].checked) sex = e.target[6].value
    if (e.target[7].checked) sex = e.target[7].value

    const createDataUser = {
      name: e.target[0].value,
      lastName: e.target[1].value,
      tel: e.target[2].value,
      direction: e.target[3].value,
      dateBirth: e.target[4].value,
      sex,
      email: e.target[8].value,
      // password: e.target[9].value
    }
    const newUserFirebase = {
      email: e.target[8].value,
      password: e.target[9].value
    }

    const repetido = lista.find(usuario => usuario.email == createDataUser.email)
    if (!repetido) {
      addNewUser(true, { data: createDataUser, user: newUserFirebase })
      setRegistered(true)
    }

    else {
      console.log('YA ESTA REGISTRADO')
      setAlreadyExist(true)
    }

  }

  return (
    <div className='contain acc'>

      <h2 style={{ borderRadius: "8px", borderBottom: "solid 5px yellow" }}>
        {registered ? 'Usuario Creado con Exito!' :  'Registrar nuevo usuario'}

      </h2>

      {
        registered ? <>

          <img className="sucess" src={require('../../../componentes/images/sucess.png')} />

          <NavLink className='sucess-a' to='/account/login'> Iniciar Sesion </NavLink>
        </>
          :
          <FormularioRegister
            span={alreadyExist}
            submitEvent={handleSubmitRegister} />

      }




    </div>
  )
}

export default Register