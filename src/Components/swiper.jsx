// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { products } from '../Data';
import '../styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Cardcomponent from './Card';

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='container  my-4  mx-auto  justify-center flex gap-3'>
          {products.chlothes.filter((product)=>product.id<=5).map((product=><Cardcomponent id={product.id} key={product.id} name={product.name} price={product.price} src={product.imageSrc}/>))}
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='container my-4 mx-auto  justify-center  flex gap-3'>
          {products.chlothes.filter((product)=>product.id<=5).map((product=><Cardcomponent id={product.id} key={product.id} name={product.name} price={product.price} src={product.imageSrc}/>))}
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='container my-4 mx-auto  justify-center  flex gap-3'>
          {products.chlothes.filter((product)=>product.id<=5).map((product=><Cardcomponent  id={product.id} key={product.id} name={product.name} price={product.price} src={product.imageSrc}/>))}
          </div>
          </SwiperSlide>
      
      </Swiper>
    </>
  );
}
