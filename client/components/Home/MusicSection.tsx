"use client";
import { useEffect, useRef, useState } from "react";
import ContentWrapper from "../Common/ContentWrapper";
import gsap from "gsap";
import CarouselNavButton from "../Common/CarouselNavButton";
import Image from "next/image";
import Link from "next/link";
import { link } from "fs";
import HoverRevealLink from "../Common/HoverRevealLink";

export default function MusicSection() {
  const themusic = [
    {
      id: 1,
      img: "/music-slider1.svg",
      alt: "yusful music art cover",
      text: "Play yusful music",
      link: "https://orcd.co/yusfulmusic",
    },
    {
      id: 2,
      img: "/music-slider2.jpg",
      alt: "san siro art cover",
      text: "Play san siro ",
      link: "https://orcd.co/sansiro",
    },
    {
      id: 3,
      img: "/music-slider3.jpeg",
      alt: "Before i blow art cover",
      text: "Play Before i blow the album",
      link: "https://open.spotify.com/album/12VGk06Iobyvd8PywSP12W?si=1m_bhNaPRVGSwCvCDEvUSA&nd=1&dlsi=b60c5ccf93cc43ca",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const imgContainerRef = useRef<HTMLImageElement | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % themusic.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? themusic.length - 1 : prev - 1));
  };
  useEffect(() => {
    const container = imgContainerRef.current;
    if (!container) return;

    // This to Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const img = container.querySelector("img");
    if (!img) return;

    const setRotateX = gsap.quickSetter(img, "rotateX", "deg");
    const setRotateY = gsap.quickSetter(img, "rotateY", "deg");

    const clamp = gsap.utils.clamp(-4, 4);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = img.getBoundingClientRect();

      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotateY = clamp(x / 60);
      const rotateX = clamp(-y / 60);

      setRotateX(rotateX);
      setRotateY(rotateY);
    };

    const enter = () => {
      gsap.to(img, {
        scale: 1.02,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    const leave = () => {
      gsap.to(img, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    img.addEventListener("mouseenter", enter);
    img.addEventListener("mousemove", handleMouseMove);
    img.addEventListener("mouseleave", leave);

    return () => {
      img.removeEventListener("mouseenter", enter);
      img.removeEventListener("mousemove", handleMouseMove);
      img.removeEventListener("mouseleave", leave);
    };
  }, [currentIndex]);

  const currentMusic = themusic[currentIndex];

  return (
    <ContentWrapper>
      <div className="about flex flex-col gap-10">
        <div className="pl-[0%] lg:pl-[9%] ">
          <h2 className="font-playfair text-[#120d07] text-3xl lg:text-5xl font-extrabold">
            Ykb, The Music
          </h2>
        </div>

        <div className="flex flex-col gap-10 font-inter pl-[3rem] md:pl-[15%] lg:pl-[20%]">
          <p className="lg:max-w-[85%] text-[#2b2b2b] text-xl font-light leading-9 capitalize">
            Explore YKB's music collection below. Use the arrows to navigate
            through the list and click "Play Music" to access a link tree where
            you can choose your preferred platform to enjoy his songs.
          </p>
        </div>

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
          <div className="flex flex-col gap-5 text-center mt-6">
            {/* <Link
              href="#"
              className="uppercase text-[#A37642] text-xl md:text-xl font-light leading-9 whitespace-nowrap"
            >
              {currentMusic.text}
            </Link> */}
            <HoverRevealLink
              href={currentMusic.link}
              target="_blank"
              text={currentMusic.text}
              className="uppercase text-[#A37642] text-xl md:text-xl font-light leading-9 whitespace-nowrap"
            />
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}
