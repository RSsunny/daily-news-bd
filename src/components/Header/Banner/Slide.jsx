"use client";
import { Carousel } from "@/lib/material/mtClass";

import Image from "next/image";
const Slide = ({ bannerNews }) => {
  return (
    <>
      <Carousel
        className="rounded-xl"
        autoplay={true}
        autoplayDelay={9000}
        loop={true}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-black" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {bannerNews?.map((news, indx) => {
          return (
            <div key={indx} className="relative cursor-pointer">
              <Image
                src={news?.img1}
                alt={news?.title}
                width={500}
                height={400}
                className=" object-cover w-full h-[400px]"
              />
              <div className="absolute bottom-0   bg-gray-300 px-10 py-5 bg-opacity-60 w-full">
                <h1 className="text-4xl font-bold">{news?.title}</h1>
                <p className="font-bold">{news?.short_des}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default Slide;
