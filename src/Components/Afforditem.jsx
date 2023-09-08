
// eslint-disable-next-line react/prop-types
function Afforditem({icon,title,description}) {
     return (
       <div className='mt-5 lg:w-[300px] h-64 w-80 md:w-[300px] flex flex-col lg:h-[400px] md:h-[400px] gap-5 '>
         <div className='w-14 h-14 bg-slate-100 flex justify-center items-center rounded-lg'>
             {icon}
         </div>
        
             <h1 className='text-xl text-black font-bold'> {title}</h1>
             <p className='text-lg text-gray-400'>{description}</p>
         
       </div>
     )
   }
   
   export default Afforditem
   