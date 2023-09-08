import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo-black.svg'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';
import Signup from './Signup';
import Forgotpassword from './Forgotpassword';
import Login from './Login';
import { Link } from 'react-router-dom';
function Menubar() {
     const [Loginvisibility,setloginvisibility]=useState(false);
     const[signup,setsignup]=useState(false)
     const[forgotpassword,setForgotpassword]=useState(false)
     // const[sidebar,setsidebar]=useState(false)
     
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
     return (
       <>
        <div className='relative z-0'>
        <Navbar bg="light" data-bs-theme="light" >
           <Container className='flex justify-around'>
             <Navbar.Brand href="#home"><img src={logo}/></Navbar.Brand>
             <Nav className="">
               <Nav.Link ><Link to='/'>Home
               </Link></Nav.Link>
               
               <Nav.Link >
               <Link to='/products'>products
               </Link>
               </Nav.Link>
              
               <Nav.Link >Productdetail</Nav.Link>
             </Nav>
             <Nav className="">
               <Nav.Link href="#home" ><SearchIcon/></Nav.Link>
               <Nav.Link href="#features"><ShoppingCartIcon/></Nav.Link>
               <Nav.Link  onClick={handlevisibility}><PersonIcon/></Nav.Link>
             </Nav>
           </Container>
         </Navbar>
        </div>
         {Loginvisibility && <Login handlevisibility={handlevisibility} handlesignup={handlesignup} handleclose={handleclose} handleforgotpassword={handleforgotpassword}/>}
          {signup && <Signup handlelogin={handlevisibility} handlesignup={handlesignup} handleclose={handleclose}/>}
          {forgotpassword&&<Forgotpassword handleclose={handleclose}/>}
       </>
     );
   }
   
   export default Menubar;