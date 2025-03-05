
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import required modules
import { Autoplay } from "swiper/modules";
// import categories styling
import './categories-style.css';

// import category images
import catHome from '../../../assets/images/categories/cat-home.png';
import catFashion from '../../../assets/images/categories/cat-fashion.png';
import catBeauty from '../../../assets/images/categories/cat-beauty.png';
import catJewellery from '../../../assets/images/categories/cat-jewellery.png';
import catElectronics from '../../../assets/images/categories/cat-electronics.png';
import catSports from '../../../assets/images/categories/cat-sports.png';

const Category = ({ image, text }) => {
  return (
    <Link to='/'
      // navigate to each category from here
      className="flex flex-col gap-5 w-fit mt-1">
      <img src={image} alt="gift"
        className="w-[120px] h-[120px] rounded-full shadow-lg hover:scale-[105%] ease-linear duration-100" />
      <h4 className="font-bold text-center text-sm lg:text-base">
        {text}
      </h4>
    </Link>
  )
}

Category.propTypes = {
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

function Categories() {
  const categories = [
    { image: catHome, text: 'Home' },
    { image: catFashion, text: 'Fashion' },
    { image: catBeauty, text: 'Beauty' },
    { image: catJewellery, text: 'Jewellery' },
    { image: catElectronics, text: 'Electronics' },
    { image: catSports, text: 'Sports' }
  ];
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
    <section className="bg-white categories">
      <div className="container mx-auto px-6 py-16">
        <div ref={swiperContainer}>
          <h2 className="section-title">
            categories
          </h2>
          <Swiper
            slidesPerView={swiperContainerWidth/150} // added 30px more than image width to make gap btw images
            spaceBetween={0}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {
              categories.map((category, index) => (
                <SwiperSlide key={index}>
                  <Category image={category.image} text={category.text} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Categories
