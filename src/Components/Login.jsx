
import CloseIcon from '@mui/icons-material/Close';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';

// eslint-disable-next-line react/prop-types 
function Login({handlesignup,handleclose,handleforgotpassword}) {
  
  return (
      <div className='fixed w-screen h-screen bg-black top-0 left-0 right-0 bg-opacity-75 z-10'>
     <div className='w-[400px] h-[620px] border bg-white fixed top-0 left-0 right-0 bottom-0 m-auto rounded-lg p-4 opacity-90 '>
     <CloseIcon onClick={handleclose} className='text-black absolute right-4'/>
     <h1 className='text-2xl text-black text-center mt-16 font-bold'>Log in</h1>
     <form action="" className='flex flex-col gap-4 mt-10 ml-5'>
       <input type="email" required placeholder='Email' className='w-80 p-3 rounded-full text-gray-600 border border-gray-300' />
       <input type="password" required placeholder='password' className='w-80 p-3 rounded-full  text-gray-600  border border-gray-300' />
          <div className='flex justify-between'>

          <div className='flex gap-3'>
          <input type="checkbox" id='signin' />
          <label htmlFor="signin" className='text-black'>Keep me sign in</label>
          </div>
          <h1 className='capitalize text-gray-600'> <button onClick={handleforgotpassword}>forgot password?</button></h1>
          </div>
          <div className='flex gap-3'>
          <button type='button' className='bg-blue-700 px-4 py-3 rounded-full w-40'> <FacebookOutlinedIcon  className='text-white '/> facebook</button>
          <button type='button' className='bg-red-700 px-4 py-3 rounded-full w-40'> <GoogleIcon  className='text-white'/> Google</button>
          </div>
          <button type='submit' className='bg-yellow-400 text-black py-4 px-4 w-80  rounded-full'>Signin</button>
          <div className='flex justify-center gap-5'>
          <h1 className='capitalize text-black'>not a member yet?</h1>
          <h1 className='capitalize text-black font-bold' > <button type='button' onClick={handlesignup}>sign up</button></h1>
          </div>
     </form>

     </div>
     </div>
  )
}

export default Login
