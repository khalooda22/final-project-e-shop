
const options=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
const sorts=['popular','fashion','casual','suits']
import { chlothes } from "../Data"
function Choices() {
  return (
    <div>
       <div className="  p-5  ">
     <div className="flex flex-col lg:flex-row md:flex-row items-center justify-between gap-10 lg:gap-0 md:gap-0">

      <h1 className="text-xl font-semibold"> Mens Tops <span className="text-gray-400">({chlothes.length})</span></h1>

      <div className="flex flex-col lg:flex-row md:flex-row gap-5 items-center">
      <p className="text-lg font-semibold">Show products:</p>
          <select name="products" id="" className=" border p-2  rounded-full">
          {options.map((option,index)=>{
               return <option key={index}>{option}</option>
          })}
          </select>
          <p className="capitalize  font-semibold">sort:</p>
          <select name="products" id="" className=" border p-2 rounded-full">
          {sorts.map((option,index)=>{
               return <option key={index} className="capitalize ">{option}</option>
          })}
          </select>
      </div>

     </div>
    </div>
    </div>
  )
}

export default Choices
