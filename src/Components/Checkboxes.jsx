// eslint-disable-next-line react/prop-types
function Checkboxes({title}) {
     return (
       <div>
          <div className="flex gap-4 p-3">
         <input type="checkbox" id={title} name={title}className="w-8 h-8" />
         <label htmlFor={title} className="text-lg font-semibold"> {title}</label>
         </div>
       </div>
     )
   }
   
   export default Checkboxes