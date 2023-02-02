import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useState } from 'react';
import { UseCartContext } from '../../cart/components/CartContext';
import { FavToastify } from './Toast'
import { useParams } from "react-router-dom"

const AddToFav = ({item, id}) => {
  const { fav: listFav, addToFav, deleteToFav } = UseCartContext()
  const inFav = listFav.includes(listFav.find((prod)=>prod.id == id))

  const [fav, setFav] = useState(inFav)

  const {category}= useParams()


  const handleAddToFav = () => {
    addToFav({...item, category})
    FavToastify('Agregado a')
  }

  const handleDeleteToFav = () => {
    deleteToFav(id)
    FavToastify('Eliminado de')

  }


  return (
    <div className='addToFav' onClick={() =>setFav(!fav)}>
      {
        !fav ?
          <AiOutlineHeart onClick={handleAddToFav} color={'red'} title='Agregar a Favoritos' />
          :
          <AiFillHeart onClick={handleDeleteToFav} color={'red'} title='Quitar de Favoritos' />
      }
    </div>
  )
}

export default AddToFav