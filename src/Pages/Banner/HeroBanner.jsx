import React, { useEffect } from "react";
import "./HeroBanner.css";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css/autoplay";
import SwiperCore from "swiper";
// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import HeadPhones from '../../Assets/Images/Gaming-Headset.jpg';
// import Slider2 from '../../../Assets/Images/slide-2.jpg'
// import Slider3 from '../../../Assets/Images/slide-3.jpg'
// import Slider4 from '../../../Assets/Images/slide-4.jpg'
import { useNavigate } from "react-router-dom";

const HeroBanner = () => {
  SwiperCore.use([Autoplay]);
  // const navigate = useNavigate();

  

 
  return (
    <>
      <Swiper
      
        // modules={[Autoplay]}
        slidesPerView={1}
        // spaceBetween={8}
        // loop={true}
        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: false,
        // }}
        className="mySwiper pb-5"
      >
        <SwiperSlide className="swiper-slider-parent">
            <div className="slider-inner-info">
                <h1 className="mb-3">GREAT DEALS ON <br /> HEADPHONES</h1>
                <h4 className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis velit commodi corrupti iste. Accusantium assumenda quidem, natus in voluptas tempore eaque qui commodi, quo reiciendis possimus libero dolore perferendis.</h4>
                <button  className="slider-read-btn">FREE CONSULTATION</button>
            </div>
            <img src={HeadPhones} alt="Slider1" />

        </SwiperSlide>
        

      </Swiper>
    </>
  );
};

export default HeroBanner;