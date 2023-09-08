import {products, sizes}from'../Data'
import Menubar from '../Components/Navbar'
import Cardcomponent from '../Components/Card'
import Dropdown from '../Components/Dropdown'
import Checkboxes from '../Components/Checkboxes'
import Carousel from '../Components/Swiper'
import Footer from '../Components/Footer';
import Newsletter from '../Components/Newsletter'
import Pricecount from '../Components/Slider'
import { Link } from 'react-router-dom'

import Color from '../Components/Color'

function Productpage() {
     const products2=[...products.furniture,...products.chlothes]
  return (
    <div>
     <Menubar/>
     
     <div className=' container  gap-20 flex flex-col lg:flex-row md:flex-row    justify-between '>
     <div className="w-96 h-full  mt-7 flex flex-col items-center gap-3 "> 
          <Dropdown title={"Product Type"}>
          <Checkboxes title='T-shirt'/>
     <Checkboxes title='Sweet-shirt'/>
     <Checkboxes title='Tank-Tops'/>
     <Checkboxes title='Dress-shirts'/>
          </Dropdown>
          <Dropdown title={"price"}>
           <div className='p-4'>
           <Pricecount/>
           </div>
          </Dropdown>
          <Dropdown title={"Collection"}></Dropdown>
          <Dropdown title={"Size"}>
               <div className='flex p-3 gap-2'>
               {sizes.map((size,index)=><Color key={index} title={size}/>)}
               </div>
          </Dropdown>
          <Dropdown title={"Color"}>
               <div className='flex gap-2 p-3 justify-center '>
                    
               {products.chlothes[0].colors.map((color,index)=><Color key={index} color={color}/>)}
               </div>
          </Dropdown>
          </div>
     <div className='flex flex-wrap flex-col lg:flex-row md:flex-row  gap-5  mt-7 items-center'>
          {products2.map((product=><Link key={product.id} to={`/productdetail/${product.id}`}><Cardcomponent id={product.id} key={product.id} name={product.name} price={product.price} src={product.imageSrc}/></Link>))}
     </div>
     </div>
     <div className='mt-10'>
     <Carousel/>

     <Newsletter backgroundImage={'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'}/>
     </div>
     <Footer/>
    </div>
  )
}

export default Productpage
