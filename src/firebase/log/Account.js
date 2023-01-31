import { useParams } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';


const Account = () => {
  const { action } = useParams()

  const Task = () => {
    if (action === 'login') return <Login />
    if (action === 'register') return <Register />
    if (action === 'logout') return 'chauwe'
    return (
      <div className="contain">
        <h2> Ocurrio un Error!</h2>
        <h3 style={{margin:"0.5rem auto 0",color:"white"}}> Ruta no encontrada</h3>
        <img src={require('../../componentes/images/error.png')} />
      </div>
    )
  }
  console.log(action)


  // action puede ser = login - register - logout
  return (
    <Task />

  )
}

export default Account