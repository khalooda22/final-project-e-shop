import Color from "../Components/Color"
import Menubar from "../Components/Navbar"
import { products } from "../Data"
import Carousel from "../Components/Swiper";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Favourite from "../Components/Favourite";
import { useState } from "react";
import Description from "../Components/Description";
import  DescriptionIcon from '@mui/icons-material/Description';
import DesignServicesIcon from '@mui/icons-material/DesignServices'; 
import { useParams } from "react-router-dom";


function Productdetail() {
    const {id}=useParams();
    const products2=[...products.chlothes,...products.furniture]
    console.log(products2)
   
     let product= products2.filter(product=>product.id==id);
    product=product[0]
     const[count,setcount]=useState(0)
     const handleincrement=()=>{
          setcount(prev=>prev+1)
     }
     const handledecrement=()=>{
          setcount(prev=>prev>0?prev-1:prev)
     }
  return (
    <div>
     <Menubar/>
      <div className="flex flex-col lg:flex-row md:flex-row  items-center lg:container mx-auto p-5  ">
          <div className="flex  gap-20 lg:w-1/2 ">
               <img className="w-24 h-24 hidden lg:flex md:flex"  src={product.imageSrc} alt="" />
               <img className="w-[350px] min-w-[250px] h-[450px] flex-grow border border-black "  src={product.imageSrc} alt="" />
          
          </div>
          <div className="lg:w-1/2 md:w-1/2   flex flex-col gap-4">
               <div className="w-14 h-10 mt-3 bg-red-500 text-white rounded-full flex items-center justify-center py-2 ml-1">sale</div>
               <h1 className="text-4xl text-black ml-3">{product.name}</h1>
              <div className="flex gap-4 ">
               <h1 className="text-4xl text-red-500 ml-3">${product.price}</h1>
               <h1 className="text-4xl text-gray-500 line-through ">{product.previousprice}</h1>


              </div>
              <h1 className="ml-3">color:</h1>
              <div className="flex mx-2 gap-2">
               {product.colors.map((color,index)=> <Color key={index} color={color}/>)}
               
              </div>
              <div className=" flex flex-col gap-3">
               <h1 className="ml-3">size:  See size table</h1>
               <button className="w-52  rounded-full h-12 text-gray-500 "> choosesize </button>
              </div>
               <h1 className="ml-3">Quantity:</h1>
              <div className=" flex  gap-3 flex-col lg:flex-row md:flex-row items-center md:items-start lg:items-start">
              <div className="w-32  rounded-full h-12 text-black items-center justify-around font-normal flex  "> 
               <RemoveIcon onClick={handledecrement}/>
               {count}
              <AddIcon onClick={handleincrement}/>
               </div>

               <button className="w-48  rounded-full h-12 text-black bg-yellow-500 font-bold "> Add to Cart </button>
              <Favourite/>
              
              </div>

          </div>
      </div>
      <div className=" container mx-auto flex flex-col lg:flex-row md:flex-row  items-center lg:items-start  justify-center">
          <button className="w-48 h-12 border   rounded-full font-bold border-yellow-500" >Description</button>
          <button className="w-48 h-12     text-gray-200 border-yellow-500" >Reviews(2)</button>

      </div>
      <div className=" container mx-auto flex flex-col lg:flex-row md:flex-row justify-around my-5">
          <Description icon={<DescriptionIcon sx={{fontSize:150}}/>} title={'Details and product description'} description='White Summer Vibes T-shirt in the uiKit line with a colorful print.
Made of jersey cotton. T-shirt fits perfectly with jeans, pants or shorts.'/>
  <Description icon={<DesignServicesIcon sx={{fontSize:150}}/>} title={'Material(s) and care'} description='Body: 98% COTTON - 2% ELASTANE'/>
      </div>
      <div className="flex justify-between container mx-auto my-2">
          <h1 className="text-2xl font-semibold">Selected just For you</h1>
          <button className="w-36 h-10 rounded-full px-4 py-2 border ">Show more</button>
      </div>
      <Carousel/>
      <Newsletter backgroundImage={'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'}/>
      <Footer/>
    </div>
  )
}

export default Productdetail
