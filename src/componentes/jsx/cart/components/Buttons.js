import { AiOutlineDelete, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const BtnDetails = ({ click,details }) => {
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

export const BtnProductInCart = ({removeProduct,id,setDetails,details}) => {

    const detailsClick = () => setDetails(!details)

    const deleteProduct = ()=>  removeProduct(id)

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






export const ButtonsCart = ({ remove, finish }) => {
    return (
        <div className='btn'>
            <button onClick={remove}>
                Vaciar Carrito
            </button>

            <button onClick={finish}>
                Terminar Compra
            </button>
        </div>
    )
}