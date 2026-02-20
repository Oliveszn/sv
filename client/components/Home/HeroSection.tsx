"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import NavHeader from "./NavHeader";
import HoverRevealLink from "../Common/HoverRevealLink";

export default function HeroSection() {
  // const wrapperRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   const wrapper = wrapperRef.current;
  //   if (!wrapper) return;

  //   const original = wrapper.querySelectorAll(".original span");
  //   const clone = wrapper.querySelectorAll(".clone span");

  //   gsap.set(clone, { y: 40 });

  //   const enter = () => {
  //     // Move original up and out
  //     gsap.to(original, {
  //       y: -40,
  //       duration: 0.5,
  //       ease: "power2.out",
  //       stagger: 0.12,
  //     });
  //     // Move clone up into view
  //     gsap.to(clone, {
  //       y: 0,
  //       duration: 0.5,
  //       ease: "power2.out",
  //       stagger: 0.12,
  //     });
  //   };

  //   const leave = () => {
  //     // Move original back to center
  //     gsap.to(original, {
  //       y: 0,
  //       duration: 0.5,
  //       ease: "power2.out",
  //       stagger: 0.12,
  //     });
  //     // Move clone back down
  //     gsap.to(clone, {
  //       y: 40,
  //       duration: 0.5,
  //       ease: "power2.out",
  //       stagger: 0.12,
  //     });
  //   };

  //   wrapper.addEventListener("mouseenter", enter);
  //   wrapper.addEventListener("mouseleave", leave);

  //   return () => {
  //     wrapper.removeEventListener("mouseenter", enter);
  //     wrapper.removeEventListener("mouseleave", leave);
  //   };
  // }, []);

  // const text = "Yusful Music EP out now";

  // const words = text.split(" ").map((word, idx) => (
  //   <span
  //     key={idx}
  //     style={{
  //       display: "inline-block",
  //       marginRight: "0.15em",
  //     }}
  //   >
  //     {word}
  //   </span>
  // ));

  return (
    <section className="homer relative min-h-[100svh] overflow-hidden">
      <Image
        src="/ykb_1.svg"
        alt="Hero"
        fill
        priority
        className="object-cover -z-10"
      />
      <NavHeader />

      <div className="flex flex-1 items-center justify-center">
        <HoverRevealLink
          href="https://orcd.co/yusfulmusic"
          target="_blank"
          text="Yusful Music EP out now"
          className="text-[#E7D7C5] text-[1.8rem] md:text-[2rem] font-semibold font-playfair mt-12 md:mt-20"
        />
      </div>

      <div className="absolute bottom-16 lg:bottom-0 left-1/2 -translate-x-1/2 text-center font-playfair">
        <h1 className="text-[5rem] md:text-[6rem] lg:text-[8rem] tracking-[-.1rem] leading-[4rem] md:leading-[7rem] lg:leading-[9rem] text-[#E7D7C5] relative font-extrabold">
          YUSUF
          <span className="absolute right-[4rem] md:right-[8rem] lg:right-[14rem] top-[3rem] md:top-[5rem] lg:top-[8rem] uppercase tracking-widest text-white block text-sm md:text-base font-normal min-w-[10%]">
            Afrobeats
          </span>
        </h1>

        <h1 className="text-[5rem] md:text-[6rem] lg:text-[8rem] tracking-[-.1rem] leading-[4rem] md:leading-[7rem] lg:leading-[9rem] text-[#E7D7C5] font-extrabold">
          KANBAI
        </h1>
      </div>
    </section>
  );
}
