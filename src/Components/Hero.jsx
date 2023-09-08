// import banner from '../assets/images/banner_1.png'

import EastRoundedIcon from '@mui/icons-material/EastRounded';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import PaidIcon from '@mui/icons-material/Paid';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Feature from './Feature';
import { useState } from 'react';


function Hero() {
 const background=[
  "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2009&q=80",
  "https://images.unsplash.com/photo-1606744824163-985d376605aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
  'https://images.unsplash.com/photo-1619217705977-b64a333616c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80',
  'https://images.unsplash.com/photo-1597075418805-0e98dd819c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  'https://plus.unsplash.com/premium_photo-1682582243325-d17d2b9383a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1991&q=80'
]
 const[count,setcount]=useState(0);
//  const[backgroundstate,setbackground]=useState(background)

//  setTimeout(() => {
//   handledecrement()
//  }, 5000);
 
 const handleincrement=()=>{
  setcount(prev=>{
    if(prev<background.length-1){
      return prev+1
    }
    else{
      return 0
    }
  })
  
 } 
 const handledecrement=()=>{
  setcount(prev=>{
    if(prev>0){
      return prev-1
    }
    else{
      return background.length-1
    }
  })
 }
//  useEffect(()=>{ fetch('https://api.unsplash.com/photos/?client_id=py_cvN3K89iUWdngrsiR_GBbADzu3FfOwVFX3AaTMhw')
// .then(res => res.json())
// .then(data=>setbackgrounds(data));
//  setbackground(backgrounds.map((image)=>image.urls.full))

//    },[backgrounds])
 return (
    <div className='h-[800px] min-w-[303px] w-full lg:w-full md:w-full md:overflow-hidden   bg-cover relative  ' style={{backgroundImage:`url(${background[count]})`}}>
      <div className="absolute  lg:w-[400px] md:w-screen  bottom-96 lg:left-[500px] md:lef-[200px]   ">
          <h1 className="text-5xl font-bold text-white leading-relaxed drop-shadow-xl shadow-black ">Make your house into a home</h1>

      </div>
      <div className='absolute bottom-80 lg:left-[500px] md:left-[500] left-5 flex gap-5'>
        <div className='w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center'>
      <EastRoundedIcon  className=' text-white ' fontSize='medium' />

        </div>
      <h1 className='text-lg text-white font-bold self-center capitalize'>shop now</h1>

      </div>
      <div className='absolute  bg-white bottom-0 lg:container p-5 lg:rounded-tr-full md:rounded-tr-full flex flex-col lg:flex-row md:flex-col justify-center gap-5 lg:gap-16'>
      <Feature icon={<LocalShippingIcon fontSize='large' className='text-blue-800 bg-gray-100 p-2 rounded-lg'/>} title="free shipping" description='On purchases over $399'/>
      <Feature icon={<SentimentSatisfiedAltIcon fontSize='large' className='text-blue-800 bg-gray-100 p-2 rounded-lg'/>} title="99% Satisfied Customers" description={`Our clients' opinions
speak for themselves
`}/>
      <Feature icon={<PaidIcon fontSize='large' className='text-blue-800 bg-gray-100 p-2 rounded-lg'/>} title="Originality Guaranteed" description='2 years warranty for each
product from our store'/>
      </div>
      <div className='absolute  h-50 top-10 md:top-24 md:right-10 lg:right-20 lg:top-[700px] right-20 flex gap-5'>
        <div className='w-10 h-10 lg:w-16 lg:h-16 md:w-16 md:h-16 flex justify-center items-center bg-black lg:bg-gray-300 bg-opacity-40  text-white'>
    <ArrowBackIcon fontSize='large' className='' onClick={handledecrement} />

        </div>
        <div className='w-10 h-10 lg:w-16 lg:h-16 md:w-16 md:h-16 flex justify-center items-center  bg-white   border '>
         <ArrowForwardIcon fontSize='large' onClick={handleincrement}/>

        </div>
      </div>
    

   
    </div>
  )
}

export default Hero

