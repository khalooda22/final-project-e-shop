import { useState } from "react"

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
// eslint-disable-next-line react/prop-types
function Dropdown({title,children}) {
     const[hide,sethide]=useState(false);
    
     const handlehide=()=>{
          sethide(prev=>!prev)
      
     }
  return (
    <div className="border w-80 ml-20">
     <div className="flex justify-between p-4">
     <h1 className="text-xl font-semibold ">{title}</h1>
     {hide==false&&<ArrowDropDownIcon className="self-center" onClick={handlehide}/>}
     {hide&&<ArrowDropUpIcon className="self-center" onClick={handlehide}/>}


     </div>
    { hide && <div>
     {children}
     </div>}

    </div>
  )
}

export default Dropdown
