import { useState, useEffect } from 'react';
import { AccountLogin } from '../../config';
import { UseCartContext } from '../../../componentes/jsx/cart/components/CartContext';
import { Logueado, Header, FormLogin } from './componentsLogin';


const Login = () => {
  const { login, accountUser } = UseCartContext()
  const [logged, setLogged] = useState(false)
  useEffect(() => {
    if (accountUser.logged) return setLogged(true)
  }, [accountUser])


  const [user, setUser] = useState({ email: '', currentPassword: '' })
  const [error, setError] = useState({ error: false })

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    AccountLogin(user, login, setError)
  }


  return (
    <div className='contain acc'>
      <Header logg={logged} />
      {
        !logged ?
          <FormLogin
            handleSubmit={handleSubmit}
            user={user}
            handleInputChange={handleInputChange}
            error={error}
          />
          :
          <Logueado />
      }
    </div>
  )
}

export default Login