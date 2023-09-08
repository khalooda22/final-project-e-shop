import Menubar from '../Components/Navbar'
import Carousel from '../Components/Swiper';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import Affords from '../Components/Afford';
import Newsletter from '../Components/Newsletter';
import Ad from '../Components/Ad';
import img from '../assets/images/product_1.png'
import img2 from '../assets/images/product_2.png'

function Home() {
  return (
    <div>
       <Menubar/>
     <Hero />
     <div className='container  mx-auto border flex flex-col lg:flex-row md:flex-row z-10 h-72 my-2 mb-52'>

     <div className='flex-grow'>
     <Ad img={img} text='New collection
available now' color={'#fb8500'}/>
     </div>
      <div className='hidden lg:block md:flex flex-grow'>
    <Ad img={img2} text='New collection
          available now' color={'#a2d2ff'}/>
</div>
</div>
     <Carousel/>
     <Affords/>
     <Carousel/>

     <Newsletter backgroundColor={'#FFF'} backgroundImage={'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'}/>
    <Footer/>
    </div>
  )
}

export default Home
