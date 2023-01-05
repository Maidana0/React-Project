import listProducts from '../products/data.json'


export const Search = (id)=>{
    const sanji =  (Object.values(listProducts.sanji)).find(prod => prod.id === id)
    const usopp =  (Object.values(listProducts.usopp)).find(prod => prod.id === id)
    const zoro  =  (Object.values(listProducts.zoro)).find(prod => prod.id === id)
       
        if(sanji)   return sanji
        if(usopp)   return usopp
        if(zoro)    return zoro

        else{
            return console.log("Error, categoria no encontrada")
        }
    }

export default Search