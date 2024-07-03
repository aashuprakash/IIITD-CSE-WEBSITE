'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import {
  ArrowBackIosNewRounded,
  ArrowForwardIosRounded,
} from '@mui/icons-material';

export default function CustomCarousel() {
  const carouselImages = [
    '/images/admissions/phd/carousel2.jpg',
    '/images/admissions/phd/carousel1.jpg',
    '/images/admissions/phd/carousel3.jpg',
    '/images/admissions/phd/carousel4.jpg',
    '/images/admissions/phd/carousel5.jpg',
  ];
  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        autoHeight={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{ nextEl: '.arrow-left', prevEl: '.arrow-right' }}
        modules={[Autoplay, Navigation]}
        className="mySwiper">
        {carouselImages.map((path, index) => (
          <SwiperSlide key={index}>
            <div className=" h-80 flex justify-center items-center">
              <img src={path} alt="..." className="object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute left-0 z-10 top-1/2 transform ml-2 px-2 py-2 rounded-full bg-primary-dark opacity-60 hover:opacity-100 -translate-y-1/2">
        <button className="arrow-right arrow">
          <ArrowBackIosNewRounded className="text-white" />
        </button>
      </div>
      <div className="absolute right-0 z-10 top-1/2 px-2 py-2 mr-2 rounded-full bg-primary-dark transform opacity-60 hover:opacity-100 -translate-y-1/2">
        <button className="arrow-left arrow ">
          <ArrowForwardIosRounded className="text-white" />
        </button>
      </div>
    </div>
  );
}
