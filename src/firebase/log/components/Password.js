import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useState } from 'react';

export const Password = ({ id, values, inputChange }) => {
  const [typePassword, setTypePassword] = useState(false)
  const handleClick = () => setTypePassword(!typePassword)

  return (
    <section className="password" style={{ display: "flex", alignItems: "center", gap: "5px" }}>

      <input
        value={values}  onChange={inputChange}
        minLength="6"
        autoComplete={`${id}-password`} id={`${id}-password`} name={`${id}Password`}
        placeholder='Contraseña*' type={typePassword ? 'text' : 'password'} required />
      {typePassword ?
        <AiFillEye title={"No Mostrar"} onClick={handleClick} fontSize={'1.5em'} color={"yellow"} />
        :
        <AiFillEyeInvisible title={"Mostrar"} onClick={handleClick} fontSize={'1.5em'} color={"yellow"} />}

    </section>
  )
}