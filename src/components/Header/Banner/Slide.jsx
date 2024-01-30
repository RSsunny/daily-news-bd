"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../../assets/slide.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
const Slide = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[400px] w-full"
      >
        <SwiperSlide className="">
          <Image
            src="https://i.ibb.co/BBGX89q/images-13.jpg"
            width={1152}
            height={400}
            alt="banner1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://i.ibb.co/4Fm2Btb/images-12.jpg"
            width={1152}
            height={400}
            alt="banner1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src=" https://i.ibb.co/gz15TCF/images-11.jpg"
            width={1152}
            height={400}
            alt="banner1"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slide;
