"use client";

import { useState } from "react";
import CarouselNavButton from "../Common/CarouselNavButton";
import ContentWrapper from "../Common/ContentWrapper";
import Link from "next/link";
import Youtube from "../Common/Svg/Youtube";

export default function MainSection() {
  const thevideos = [
    {
      id: 1,
      img: "/ykb4.jpg",
      alt: "f&s cover",
      text: "watch F&s Podcast",
      link: "https://www.youtube.com/watch?v=jvwf-SiRikw&pp=ygUPeWtiIGYmcyBwb2RjYXN0",
      title: "F&s Podcast",
      desc: "YKB was interviewed by the hosts of the F&S Uncensored Podcast, Feyikemi Akin-Bankole and Simi Badiru. The purpose of the interview was to delve into his latest EP titled 'The Yusful Music.'",
    },
    {
      id: 3,
      img: "/ykb5.jpeg",
      alt: "cool fm cover",
      text: "watch Cool fm",
      link: "https://www.youtube.com/watch?v=bvMcKsSDNEU",
      title: "Cool fm",
      desc: "'I Had No Idea Sansiro Was A Real Stadium When I Wrote the Song!'- YKB. YKB sat down with the people of cool fm 96.9 to discuss his latest single titled SAN SIRO",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % thevideos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? thevideos.length - 1 : prev - 1));
  };
  const currentMusic = thevideos[currentIndex];
  return (
    <section>
      <ContentWrapper>
        <div className="flex flex-col gap-[3.2rem]">
          <h1 className="uppercase text-[#120d07] text-[1.395rem] pl-[10%] md:pl-0 font-bold md:text-[2.25rem] font-playfair">
            INTERVIEWS AND LIVE
          </h1>

          <div className="flex flex-col gap-8 relative">
            <div className="hero">
              {/* //div to make image offset the screen */}
              <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
                <div
                  // ref={imgContainerRef}
                  className="relative flex h-[15rem] md:h-[30rem] justify-center relative cursor-cell w-full transition-transform duration-500"
                >
                  <img
                    key={currentMusic.id}
                    src={currentMusic.img}
                    alt={currentMusic.alt}
                    className="object-cover will-change-transform"
                  />
                  <Link
                    href={currentMusic.link}
                    target="_blank"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <Youtube />
                  </Link>
                </div>
                <div className="flex items-center absolute justify-between md:justify-center gap-0 md:gap-[56rem] m-auto w-full z-10 top-[35%] md:top-[45%]">
                  <CarouselNavButton
                    direction="prev"
                    onClick={prevSlide}
                    className="pointer-events-auto"
                  />

                  <CarouselNavButton
                    direction="next"
                    onClick={nextSlide}
                    className="pointer-events-auto"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 text-center mt-6 max-w-full md:max-w-[75%] pl-[10%] md:pl-[20%]  ">
              <h3 className="text-[#594024] text-[1.5625rem] md:text-[2.1875rem] uppercase font-playfair">
                {currentMusic.title}
              </h3>
              <p className="text-[#2b2b2b] capitalize text-[1.125rem] md:text-[1.375rem] font-light leading-[2rem] md:leading-[2.2rem] font-inter">
                {currentMusic.desc}
              </p>
              <Link
                href={currentMusic.link}
                target="_blank"
                className="uppercase text-[#A37642] text-xl md:text-xl font-light leading-9 whitespace-nowrap font-inter"
              >
                {currentMusic.text}
              </Link>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
}
