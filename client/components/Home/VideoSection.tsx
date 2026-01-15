"use client";
import { useEffect, useRef, useState } from "react";
import ContentWrapper from "../Common/ContentWrapper";
import CarouselNavButton from "../Common/CarouselNavButton";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

export default function VideoSection() {
  const thevideos = [
    {
      id: 1,
      img: "/fujimoto.webp",
      alt: "Fuji Moto art cover",
      text: "Listen to Fuji Moto",
    },
    {
      id: 2,
      img: "/loseyi.webp",
      alt: "Loseyi Professor art cover",
      text: "Listen to Loseyi Professor",
    },
    {
      id: 3,
      img: "/Nahamciaga.png",
      alt: "Nahamciaga art cover",
      text: "Listen to Nahamciaga",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const imgContainerRef = useRef<HTMLImageElement | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % thevideos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? thevideos.length - 1 : prev - 1));
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

  const currentMusic = thevideos[currentIndex];
  return (
    <ContentWrapper>
      <div className="about flex flex-col gap-10">
        <div className="pl-[9%] ">
          <h2 className="font-playfair text-[#120d07] text-3xl lg:text-5xl font-extrabold">
            The Videos
          </h2>
        </div>
        <div className="flex flex-col gap-10 font-inter">
          <p className="pl-[20%] max-w-[85%] text-[#2b2b2b] text-xl font-light leading-9 capitalize">
            Discover YKB's videos below. Navigate through the list using the
            arrows and click on "Watch video" to be directed to YouTube for
            viewing.
          </p>

          <div className="flex flex-col items-center justify-center ">
            <div
              ref={imgContainerRef}
              className="w-[30rem] aspect-square hero relative"
            >
              <Image
                key={currentMusic.id}
                src={currentMusic.img}
                alt={currentMusic.alt}
                fill
                className="object-cover will-change-transform"
                priority
              />
              <div className="text-center mt-6">
                <Link
                  href="#"
                  className="uppercase text-[#A37642] text-xl font-light leading-9"
                >
                  {currentMusic.text}
                </Link>
              </div>

              <div className="flex items-center absolute justify-center gap-[46rem] m-auto w-full z-10 top-[45%]">
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
        </div>
      </div>
    </ContentWrapper>
  );
}
