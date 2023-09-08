
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';

function Favourite() {
  const[Favorite,setFavorite]=useState(false)
  const handlefavorite=()=>{
    setFavorite(prev=>!prev)
  }
  return (
    <div>
        {Favorite==false&&  <div className="border rounded-full bg-white text-black w-10 h-10 flex justify-center items-center slef-end" onClick={handlefavorite}><FavoriteBorderIcon/></div>}
        {Favorite==true && <div className="border rounded-full bg-yellow-500 text-black w-10 h-10 flex justify-center items-center slef-end" onClick={handlefavorite}><FavoriteBorderIcon/></div>}
      
    </div>
  )
}

export default Favourite
