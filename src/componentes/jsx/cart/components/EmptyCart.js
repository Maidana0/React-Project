import Secciones from '../../home/Sections'
import { useState } from 'react'

const show = (set, click, setLoad) => {
  setLoad(true)
  setTimeout(() => {
    setLoad(false)
    set(!click)
  }, 1900);
}

const MostrarCarro = ({ set, click, setLoad }) => {
  const showMe = () => show(set, click, setLoad)
  return (
    <>
      <img src={require('../../../images/sanji-circle.png')} />
      <div>
        <h3>Tu carrito de compras esta vacio</h3>
        <button onClick={showMe}>Agregar Productos</button>
      </div>
    </>
  )
}

const MostrarCategorias = ({ set, click, setLoad }) => {
  const showMe = () => show(set, click, setLoad)
  return (
    <>
      <h3>Lista de Categorias para Seleccionar</h3>
      <Secciones />
      <button onClick={showMe}>Cancelar</button>
    </>
  )
}

const EmptyCart = () => {

  const [load, setLoad] = useState(false)
  const [show, setShow] = useState(false)



  return (<>

    {
      load
        ? <img className='gif' src={require('../../../images/load.webp')} />
        :
        <div className='empty-cart'>
          {
            show
              ? <MostrarCategorias
                set={setShow}
                click={show}
                setLoad={setLoad}
              />
              : <MostrarCarro
                set={setShow}
                click={show}
                setLoad={setLoad}
              />
          }
        </div>
    }


  </>



  )
}

export default EmptyCart