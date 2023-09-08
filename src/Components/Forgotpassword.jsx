import CloseIcon from '@mui/icons-material/Close';

// eslint-disable-next-line react/prop-types
function Forgotpassword({handleclose,}) {
  return (
     <div className='fixed w-screen h-screen bg-black top-0 left-0 right-0 bottom-0 bg-opacity-75 z-10'>

     <div className='w-[400px] h-[400px] border bg-white fixed top-0 left-0 right-0 bottom-0 m-auto rounded-lg p-4 opacity-90 '>
     <CloseIcon onClick={handleclose} className='text-black absolute right-4'/>
     <h1 className='text-2xl text-black text-center mt-10 font-bold'>Forgot Password</h1>
     <form action="" className='flex flex-col gap-4 mt-10 ml-5'>
       <input type="email" required placeholder='Email' className='w-80 p-3 rounded-full text-gray-600 border border-gray-300' />
       <input type="text" required placeholder='password' className='w-80 p-3 rounded-full  text-gray-600  border border-gray-300' />
       
       <button type='submit' className='bg-yellow-400 text-black py-4 px-4 w-80 rounded-full'>Reset Password</button>
         
         
     </form>

     </div>
     </div>
  )
}

export default Forgotpassword
