// eslint-disable-next-line react/prop-types
function Feature({icon,title,description}) {
     return (
       <div className="flex gap-5 ">
             {icon}
         <div>
             <h1 className="text-xl font-bold">{title}</h1>
             <h1 className="text-lg w-52">{description}</h1>
         </div>
       </div>
     )
   }
   
   export default Feature
   