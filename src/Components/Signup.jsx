
import CloseIcon from '@mui/icons-material/Close';


// eslint-disable-next-line react/prop-types 
function Signup({handleclose,handlelogin}) {
  
  return (
    <div className='fixed w-screen h-screen bg-black top-0 left-0 right-0 bottom-0 bg-opacity-75 z-10'>
     <div className='w-[400px] h-[620px] border bg-white fixed top-0 left-0 right-0 bottom-0 m-auto rounded-lg p-4 opacity-90 '>
     <CloseIcon onClick={handleclose} className='text-black absolute right-4'/>
     <h1 className='text-2xl text-black text-center mt-16 font-bold'>Signup</h1>
      <form action="" className='flex flex-col  mt-10 gap-2'>
        <input type="text" placeholder='First Name' className='p-3 rounded-full border text-gray-700 capitalize' />
        <input type="text" placeholder='Last Name'  className='p-3 rounded-full border text-gray-700 capitalize'/>
        <input type="email" placeholder='Email'  className='p-3 rounded-full border text-gray-700 '/>
        <input type="password" placeholder='Password' className='p-3 rounded-full border text-gray-700 ' />
       <div className='flex gap-2'>
       <input type="checkbox" id='checking' />
        <label htmlFor="checking" className='text-black '> agree to the Google Terms of Service and
        Privacy Policy</label>
       </div>
       <button type='submit' className='p-3 rounded-full bg-yellow-500 text-black'>Signup</button>
        <button onClick={handlelogin}><h1 className='text-black text-lg'>Are you already a member?</h1></button>




      </form>

     </div>
     </div>
  )
}

export default Signup
