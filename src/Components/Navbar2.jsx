import logo from '../assets/images/logo.svg'

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import { NavLink } from 'react-router-dom';

function Navbar2() {
  return (
    <div className='border p-10'> 
      <div className="fixed  lg:flex md:flex w-screen h-screen lg:h-20 md:h-20 bg-black bg-opacity-30  text-white  lg:flex-row md:flex-row  flex-col p-4 lg:justify-around md:justify-around items-center justify-around top-0 left-0 right-0 z-10 capitalize">
     <NavLink to='/'><img src={logo} alt="logo" className='w-52' /></NavLink>
     <ul className='flex gap-10 self-center lg:flex-row md:flex-row flex-col'>
         <NavLink to='products'><li>products</li></NavLink> 
          <li>inspiration</li>
          <li>Rooms</li>
     </ul>
     <ul className='flex gap-10 self-center'>
          <li>
               <SearchIcon/>
          </li>
          <li>
              <ShoppingCartIcon/> 
          </li>
          {/* <li>
               <PersonIcon onClick={handlevisibility}/>
          </li> */}
     </ul>
     {/* {Loginvisibility && <Login handlevisibility={handlevisibility} handlesignup={handlesignup} handleclose={handleclose} handleforgotpassword={handleforgotpassword}/>}
     {signup && <Signup handlelogin={handlevisibility} handlesignup={handlesignup} handleclose={handleclose}/>}
     {forgotpassword&&<Forgotpassword handleclose={handleclose}/>} */}
    </div>
    </div>
    
   
  )
}

export default Navbar2
