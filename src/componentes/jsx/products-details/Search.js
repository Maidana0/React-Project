import { ListProducts } from '../../../firebase/config'
import { useState } from 'react'


export const Search = (category, id) => {

    const [listCategory, setLlistCategory] = useState(false)
    // useEffect(() => {
    //     return async () => {
    //         const lista = await ListProducts(`${category}List`)
    //         setLlistCategory(lista)
    //     }
    // }, [])

    if (!listCategory){
        ListProducts(`${category}List`)
        .then(data => setLlistCategory(data))
    }


    const productoFinal = () => {
        if (listCategory) {
            const getProd = listCategory.find(prod => prod.id === id)
            return (
                getProd ? getProd : {
                    "error": `El producto con el ID: 
            ${id} no se encuentra en nuestra base de datos!!`
                }
            )
        }
        else { return false }
    }


    return productoFinal()

}

export default Search