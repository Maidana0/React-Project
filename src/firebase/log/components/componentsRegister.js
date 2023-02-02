import { useState } from "react"
import { Link } from "react-router-dom"
import { db , CreateUser} from "../../config";
import { collection, addDoc } from "firebase/firestore";
import { Password } from "./Password"




const Checkbox = () => {
    const [check, setCheck] = useState({ checked: null })

    const handleChange = element => {
        setCheck({ checked: element.target.value })
    }

    return (
        <section  >
            <label>Sexo:</label>
            <div className="sex">
                <label>
                    <input type="radio" value="male" checked={check.checked === "male"} onChange={handleChange} />
                    <span>Masculino</span>
                </label>

                <label>
                    <input type="radio" value="feminine" checked={check.checked === "feminine"} onChange={handleChange} />
                    <span>Femenino</span>
                </label>

                <label>
                    <input type="radio" value="others" checked={check.checked === "others"} onChange={handleChange} />
                    <span>Otros</span>
                </label>

            </div>
        </section>
    )
}

const Date = () =>
    <>
        <section >
            <label>
                Fecha de Nacimiento:
            </label>
            <input id="date" type="date" name="dateBirth" min="1970-01-01" max="2020-01-01" required />
        </section>
    </>

const AlreadyRegistered = () =>
    <Link to={'/account/login'}>
        Ya estoy registrado
    </Link>
const InfoUser = () =>
    <>
        <input type="text" name="name" placeholder="Ingrese su nombre" required />
        <input type="text" name="lastName" placeholder="Ingrese su apellido" required />
        <input autoComplete='user-tel' type="tel" name="tel" placeholder="Ingrese su numero celular con codigo de area" required />
    </>



export const addNewUser = (on, objUser) => {

    const productosRef = collection(db, 'Usuarios')
    if (on) {
         addDoc(productosRef, objUser.data)
         CreateUser(objUser.user )
    }
}



export const FormularioRegister = ({ submitEvent , span}) => {
    return (<>
        <form id="register" onSubmit={submitEvent}>
            <h3>Datos Personales</h3>

            <InfoUser />

            <Date />
            <Checkbox />
            <h3>Datos de Ingreso</h3>

            <input autoComplete='user-email' type="email"
                name="email" placeholder="Ingrese su correo electronico" required />

            <Password id="new" />
            {
                span &&
                <span>**Ya existe una cuenta con esa direccion de Email**</span>
            }
            <button type='submit'>Registrarse</button>

        </form>
        <AlreadyRegistered />

    </>)
}