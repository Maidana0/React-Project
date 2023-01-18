import { AiOutlineDelete, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const BtnDetails = ({ click }) => {
    return (
        <AiOutlineEye
            color='black'
            size={'2.5em'}
            onClick={click}
            title={'Mostrar Detalles'}
        />
    )
}

export const BtnProductInCart = ({removeProduct,id}) => {
    const handleClick = () => {
        console.log("first")
    }

    const deleteProduct = ()=>  removeProduct(id)

    return (
        <>
            <BtnDetails
                click={handleClick} />

            <AiOutlineDelete
                color={'red'}
                size={'2.5em'}
                onClick={deleteProduct}
                title={'Eliminar Producto'}
            />
        </>

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