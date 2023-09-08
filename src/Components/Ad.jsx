// import { CloseIcon } from "@mui/icons-material"
// eslint-disable-next-line react/prop-types
function Ad({text,img,color}) {
     

  return (
     
    <div className=" flex justify-center flex-grow z-10 " style={{backgroundColor:color}}>
     <img src={img} alt=""  />
     <div className='self-center flex-col gap-4 w-52  '>
      <h1 className=' text-2xl mb-2 text-white font-bold'> {text}</h1>
     <button className='text-black border px-3  bg-white py-2 rounded-full'>view all</button>
  
     </div>
    </div>
  )
}

export default Ad
