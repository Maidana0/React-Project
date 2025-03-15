import { AiOutlineDelete, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';

const BtnDetails = ({ click, details }) => {
    return (
        !details
            ?
            <AiOutlineEye
                color='black'
                size={'2.5em'}
                onClick={click}
                title={'Mostrar Detalles'}
            />
            :
            <AiOutlineEyeInvisible
                color='black'
                size={'2.5em'}
                onClick={click}
                title={'Cerrar Detalles'}
            />
    )
}

export const BtnProductInCart = ({ removeProduct, id, setDetails, details }) => {

    const detailsClick = () => setDetails(!details)

    const deleteProduct = () => {

        Swal.fire({
            title: 'Seguro que quiere borrar este producto?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'No, cancelar!',
            confirmButtonText: 'Si, quiero Borrarlo!'
          }).then((result) => {
            if (result.isConfirmed) {
                removeProduct(id);
              Swal.fire(
                'Listo!',
                'Tu producto ha sido removido.',
                'success'
              )
            }
          })

    }

    return (
        <div className='btn-details-delete'>
            <BtnDetails
                click={detailsClick}
                details={details}
            />

            <AiOutlineDelete
                color={'red'}
                size={'2.5em'}
                onClick={deleteProduct}
                title={'Eliminar Producto'}
            />
        </div>

    )
}



export const ButtonsCart = ({ remove, finish, log }) => {
    const navigate = useNavigate()

    return (<>
        {log.logged ?
            <span>Seguir con la cuenta: <strong>{log.email} </strong> </span>
            :
            <span>Debes iniciar sesion para continuar</span>
        }
        <br />
        
        <div className='btn'>
            <button onClick={remove}>
                Vaciar Carrito
            </button>

            {
                log.logged ?
                    <button onClick={finish}>
                        Terminar Compra
                    </button>
                    :
                    <button onClick={() => { navigate('/account/login') }}>
                        Log In
                    </button>
            }
        </div>

    </>)
}