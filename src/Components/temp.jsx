import logo from '../assets/images/logo.svg'
import logoBlack from '../assets/images/logo-black.svg'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import Forgotpassword from './Forgotpassword';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom';


function Navbar() {
     const [Loginvisibility,setloginvisibility]=useState(false);
     const[signup,setsignup]=useState(false)
     const[forgotpassword,setForgotpassword]=useState(false)
     const[sidebar,setsidebar]=useState(false)
     
     const handlevisibility=()=>{
         setloginvisibility(true)
         setsignup(false)
         setForgotpassword(false);
         
     }
     const handlesignup=()=>{
          setsignup(true)
          setloginvisibility(false)
          setForgotpassword(false);
     }
     const handleforgotpassword=()=>{
          setForgotpassword(true);
          setsignup(false)
          setloginvisibility(false)
     }
     const handleclose=()=>{
          setsignup(false);
          setloginvisibility(false)
          setForgotpassword(false)
     }
   const handlesidebar=()=>{
     setsidebar(prev=>!prev)
   }
   
  return (
    <div className='z-10 relative'>
     {/* small screen */}
   {sidebar==false&&

     <button className='text-white fixed top-5   left-5 z-10 md:hidden lg:hidden ' onClick={handlesidebar}> <MenuIcon fontSize='large'className='text-black border border-black rounded-lg bg-opacity-80'/> </button>
}
{   sidebar &&     <div className='w-96 lg:hidden md:hidden  bg-white bg-opacity-80 h-screen fixed top-0 left-0 bottom-0 flex flex-col items-center  justify-between p-2 border'>
          <CloseIcon className=' self-end text-black' onClick={handlesidebar}/>
          <NavLink to='/'><img src={logoBlack} alt="logo" className='w-52' /></NavLink>
          <ul className='flex gap-10 self-center lg:flex-row md:flex-row flex-col text-black font-bold drop-shadow-xl capitalize'>
               <NavLink to= '/products'><li className='cursor-pointer'>products</li></NavLink>
               <li>inspiration</li>
               <li>Rooms</li>
          </ul>
          <ul className='flex gap-10 self-center text-black'>
               <li>
                    <SearchIcon/>
               </li>
               <li>
                    <ShoppingCartIcon/> 
               </li>
               <li>
                    <PersonIcon onClick={handlevisibility}/>
               </li>
          </ul>
          {Loginvisibility && <Login handlevisibility={handlevisibility} handlesignup={handlesignup} handleclose={handleclose} handleforgotpassword={handleforgotpassword}/>}
          {signup && <Signup handlelogin={handlevisibility} handlesignup={handlesignup} handleclose={handleclose}/>}
          {forgotpassword&&<Forgotpassword handleclose={handleclose}/>}
          </div>

         
          }
        
     {/* large and medium screen  */}
    <div className="fixed hidden lg:flex md:flex w-screen h-screen lg:h-20 md:h-20 bg-black bg-opacity-30  text-white  lg:flex-row md:flex-row  flex-col p-4 lg:justify-around md:justify-around items-center justify-around top-0 left-0 right-0 z-10 capitalize">
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
          <li>
               <PersonIcon onClick={handlevisibility}/>
          </li>
     </ul>
     {Loginvisibility && <Login handlevisibility={handlevisibility} handlesignup={handlesignup} handleclose={handleclose} handleforgotpassword={handleforgotpassword}/>}
     {signup && <Signup handlelogin={handlevisibility} handlesignup={handlesignup} handleclose={handleclose}/>}
     {forgotpassword&&<Forgotpassword handleclose={handleclose}/>}
    </div>
    </div>
    
  )
}

export default Navbar
