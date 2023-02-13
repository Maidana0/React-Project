import { ars } from "./CartContext"
import { db } from "../../../../firebase/config"
import { collection, addDoc } from "firebase/firestore"
import Swal from "sweetalert2"

const orderGenerator = (max, min)=>{
    return (
        Math.floor(Math.random() * (max - min) + min)
    )
}


const check = (productos) => productos.map(data => {
    return ` ${data.nombre} de la categoria ${data.categoria} - `
})

export const handleClickFinish = async (user, products, total, lista, finishCart) => {
    try {

        const dataUser = await lista ? lista.find(data => data.email = user.email) : false

        if (dataUser) {
            const orden = {
                id: `${dataUser.lastName}-order-${orderGenerator(1000,10)}-${orderGenerator(100000,1000)}-${orderGenerator(10,1)}`,
                client: {
                    fullName: `${dataUser.name} ${dataUser.lastName}`,
                    tel: dataUser.tel,
                    direction: dataUser.direction,
                    email: user.email
                },
                items: products,
                total: ars.format(total),
            }
            Swal.fire({
                title: 'Desea continuar?',
                text: `Chequea tus productos: 
                ${check(products)}`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                cancelButtonText: 'No, quiero editarla',
                confirmButtonText: 'Si, quiero finalizarla'
            }).then((result) => {
                if (result.isConfirmed) {
                    const orderRef = collection(db, 'Ordenes')
                    addDoc(orderRef, orden)
                        .then((doc) => {
                            finishCart(orden.id)
                            console.log(orden)
                        })
                }
            })
            return
        }

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Espere un momento e intentelo de nuevo.',
            footer: 'Cargando datos...'
        })

    } catch (error) {
        console.log(error)
    }


}

