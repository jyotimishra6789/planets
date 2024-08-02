import React, { useRef,useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './HomeSlider.css';

// Import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export const HomeSlider = () => {
  // Initialize state with null
  const [selectedSlide, setSelectedSlide] = useState(0);

  return (
    <div>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide onClick={() => setSelectedSlide(1)}>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Nature 1" />
        </SwiperSlide>
        <SwiperSlide onClick={() => setSelectedSlide(2)}>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Nature 2" />
        </SwiperSlide>
        <SwiperSlide onClick={() => setSelectedSlide(3)}>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Nature 3" />
        </SwiperSlide>
        <SwiperSlide onClick={() => setSelectedSlide(4)}>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Nature 4" />
        </SwiperSlide>
        <SwiperSlide onClick={() => setSelectedSlide(5)}>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="Nature 5" />
        </SwiperSlide>
        <SwiperSlide onClick={() => setSelectedSlide(6)}>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="Nature 6" />
        </SwiperSlide>
        <SwiperSlide onClick={() => setSelectedSlide(7)}>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="Nature 7" />
        </SwiperSlide>
        <SwiperSlide onClick={() => setSelectedSlide(8)}>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="Nature 8" />
        </SwiperSlide>
        <SwiperSlide onClick={() => setSelectedSlide(9)}>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="Nature 9" />
        </SwiperSlide>
      </Swiper>
      {selectedSlide !==null && <p>Selected Slide: {selectedSlide}</p>}
    </div>
  );
}

export default HomeSlider;
