
import { useEffect, useRef, useState } from 'react';
import ProductCard from './../productcard/ProductCard';
// import my styling
import './product-swiper-style.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

function ProductsSwiper() {
  const swiperContainer = useRef(null);
  const [swiperContainerWidth, setSwiperContainerWidth] = useState(0);
  useEffect(() => {
    const updateWidth = () => {
      if (swiperContainer.current) {
        setSwiperContainerWidth(swiperContainer.current.offsetWidth); 
      }
    }
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  return (
    <section className='bg-white products-swiper'>
      <div className="container mx-auto px-6 py-6"
        ref={swiperContainer}>
        <Swiper
            slidesPerView={swiperContainerWidth/330} // added 30px more than image width to make gap btw images
            spaceBetween={10}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
        >
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default ProductsSwiper
