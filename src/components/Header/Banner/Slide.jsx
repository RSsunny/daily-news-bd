"use client";

import { imagePro } from "@/lib/image/image";
import { Carousel } from "@/lib/material/mtClass";

import Image from "next/image";
const Slide = () => {
  return (
    <>
      <Carousel
        className="rounded-xl"
        autoplay={true}
        autoplayDelay={3000}
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
        {imagePro.map((image, indx) => {
          return (
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={400}
              className=" object-cover w-full h-[400px]"
              key={indx}
            />
          );
        })}
      </Carousel>
    </>
  );
};

export default Slide;
