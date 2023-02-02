import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useState } from 'react';

const AddToFav = () => {
    const [fav, setFav]=useState(false)
  return (
    <div className='addToFav' onClick={()=>setFav(!fav)}>
    {
        !fav ?
        <AiOutlineHeart   color={'red'}  title='Agregar a Favoritos'/>
        :
        <AiFillHeart color={'red'} title='Quitar de Favoritos'/>
    }
    </div>
  )
}

export default AddToFav