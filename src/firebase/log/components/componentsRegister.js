import { useState } from "react"
import { Link } from "react-router-dom"


export const Checkbox = () => {
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

export const Date = () =>{

    return(
        <section >
        <label>
            Fecha de Nacimiento:
        </label>
        <input id="date" type="date" name="date" min="1970-01-01" max="2020-01-01" required />
    </section>
    )
}

export const AlreadyRegistered =()=>
<Link to={'/account/login'}>
    Ya estoy registrado
  </Link>
