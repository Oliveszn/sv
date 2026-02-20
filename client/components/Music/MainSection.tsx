"use client";
import { useState } from "react";
import ContentWrapper from "../Common/ContentWrapper";
import CarouselNavButton from "../Common/CarouselNavButton";
import Link from "next/link";

export default function MainSection() {
  const themusic = [
    {
      id: 1,
      img: "/music-slider1.svg",
      alt: "yusful music art cover",
      text: "Play yusful music ep",
      link: "https://orcd.co/yusfulmusic",
      title: "yusful music ep",
      desc: "YUSFUL MUSIC is life through my lens. 'What I stand to gain with music is connecting to people and making sure that l'm able to create something that they can find themselves inside'.",
    },

    {
      id: 3,
      img: "/music-slider3.jpeg",
      alt: "Before i blow art cover",
      text: "Play Before i blow",
      link: "https://open.spotify.com/album/12VGk06Iobyvd8PywSP12W?si=1m_bhNaPRVGSwCvCDEvUSA&nd=1&dlsi=b60c5ccf93cc43ca",
      title: "before i blow",
      desc: "Melon, a great Nigerian singer and composer, has released a new track called “Superstar (Remix)” starring YKB.This is an awesome song that will surely be worth a place on your playlist if you are a lover of good music.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % themusic.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? themusic.length - 1 : prev - 1));
  };
  const currentMusic = themusic[currentIndex];
  return (
    <section>
      <ContentWrapper>
        <div className="flex flex-col gap-[3.2rem]">
          <h1 className="uppercase text-[#120d07] text-[1.395rem] pl-[10%] md:pl-0 font-bold md:text-[2.25rem] font-playfair">
            Album's & ep's
          </h1>
          <div className="flex flex-col gap-8 relative">
            <div className="hero">
              {/* //div to make image offset the screen */}
              <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
                <div
                  // ref={imgContainerRef}
                  className="flex h-[15rem] md:h-[30rem] justify-center relative cursor-cell w-full transition-transform duration-500"
                >
                  <img
                    key={currentMusic.id}
                    src={currentMusic.img}
                    alt={currentMusic.alt}
                    className="object-cover will-change-transform"
                  />
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
