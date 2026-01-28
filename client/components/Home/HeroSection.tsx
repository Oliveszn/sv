"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import Logo from "../Common/Svg/Logo";
import HamburgerBtn from "../Common/HamburgerBtn";
import { usePageTransition } from "@/app/providers/TransitionProvider";
import { usePathname } from "next/navigation";

export default function HeroSection() {
  const { startTransition } = usePageTransition();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const overlayRef = useRef(null);
  const linksRef = useRef<(HTMLButtonElement | null)[]>([]);

  let links = [
    { name: "The artist", link: "/about" },
    { name: "The music", link: "/music" },
    { name: "The videos", link: "/videos" },
    { name: "The store", link: "/store" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const original = wrapper.querySelectorAll(".original span");
    const clone = wrapper.querySelectorAll(".clone span");

    gsap.set(clone, { y: 40 });

    const enter = () => {
      // Move original up and out
      gsap.to(original, {
        y: -40,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.12,
      });
      // Move clone up into view
      gsap.to(clone, {
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.12,
      });
    };

    const leave = () => {
      // Move original back to center
      gsap.to(original, {
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.12,
      });
      // Move clone back down
      gsap.to(clone, {
        y: 40,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.12,
      });
    };

    wrapper.addEventListener("mouseenter", enter);
    wrapper.addEventListener("mouseleave", leave);

    return () => {
      wrapper.removeEventListener("mouseenter", enter);
      wrapper.removeEventListener("mouseleave", leave);
    };
  }, []);

  useEffect(() => {
    if (!headerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          clearProps: "all",
        },
      );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!overlayRef.current) return;

    if (isMenuOpen) {
      // Open menu animation
      gsap.to(overlayRef.current, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.3,
        ease: "power2.out",
      });

      // Stagger fade in links from bottom
      gsap.fromTo(
        linksRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.2,
        },
      );
    } else {
      // Close menu animation
      gsap.to(overlayRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.3,
        ease: "power2.in",
      });

      gsap.to(linksRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.in",
      });
    }
  }, [isMenuOpen]);

  const text = "Fuji Moto Out Now";
  const letters = text.split("").map((char, idx) => (
    <span key={idx} style={{ display: "inline-block" }}>
      {char === " " ? "\u00A0" : char}
    </span>
  ));
  const words = text.split(" ").map((word, idx) => (
    <span
      key={idx}
      style={{
        display: "inline-block",
        marginRight: "0.15em",
      }}
    >
      {word}
    </span>
  ));
  const renderWords = () =>
    text.split(" ").map((word, idx) => (
      <span
        key={idx}
        style={{
          display: "inline-block",
          marginRight: "0.3em",
        }}
      >
        {word}
      </span>
    ));

  return (
    <section className="homer">
      <header
        ref={headerRef}
        className="bg-transparent px-6 sm:px-8 lg:px-10 z-50"
      >
        <div className="flex items-center justify-between py-6 max-w-6xl mx-auto w-full">
          <button
            aria-label={`Go to home`}
            onClick={() => {
              if (pathname === "/") {
                return;
              }
              startTransition("/", "Oluwaloseyi");
            }}
            className="cursor-pointer"
          >
            <Logo />
          </button>

          <div className="hidden lg:flex items-center justify-center gap-6 font-inter">
            {links.map((items) => (
              <button
                key={items.name}
                onClick={() => {
                  if (pathname === items.link) {
                    return;
                  }
                  startTransition(items.link, "Oluwaloseyi");
                }}
                aria-label={`Go to ${items.name}`}
                className="text-white cursor-pointer inline-block text-base list-none relative no-underline uppercase relative group cursor-pointer"
              >
                {items.name}
                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#E7D7C5] transition-all duration-500 ease-out group-hover:w-full"></span>
              </button>
            ))}
          </div>

          <div className="hidden lg:flex text-[#E7D7C5] text-xl uppercase items-start cursor-pointer flex gap-4 justify-start font-playfair">
            <span className="inline-block">For bookings</span>
          </div>

          <div
            className="cursor-pointer lg:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            <HamburgerBtn isOpen={isMenuOpen} />
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          ref={overlayRef}
          className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center opacity-0 pointer-events-none lg:hidden"
        >
          {/* Close Button */}
          <div
            className="absolute top-6 right-6 cursor-pointer"
            onClick={toggleMenu}
          >
            <HamburgerBtn isOpen={isMenuOpen} />
          </div>

          {/* Mobile Links */}
          <nav className="flex flex-col items-center gap-8">
            {links.map((item, index) => (
              <button
                key={item.name}
                onClick={() => {
                  if (pathname === item.link) {
                    toggleMenu();
                    return;
                  }

                  startTransition(item.link, "Oluwaloseyi");
                  toggleMenu();
                }}
                aria-label={`Go to ${item.name}`}
                ref={(el) => {
                  linksRef.current[index] = el;
                }}
                className="text-white text-3xl sm:text-4xl font-inter capitalize opacity-0 hover:text-[#E7D7C5] transition-colors relative group cursor-pointer"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#E7D7C5] transition-all duration-500 ease-out group-hover:w-full"></span>
              </button>
            ))}

            {/* For Bookings in Mobile Menu */}
            <div
              ref={(el) => {
                linksRef.current[links.length] = el as any;
              }}
              className="text-[#E7D7C5] text-2xl sm:text-3xl uppercase font-playfair mt-8 opacity-0 cursor-pointer"
            >
              For bookings
            </div>
          </nav>
        </div>
      </header>
      <div
        ref={wrapperRef}
        className="text-wrapper text-[#E7D7C5] text-[2rem] font-semibold font-playfair mt-7 md:mt-20"
        style={{
          position: "relative",
          display: "inline-block",
          overflow: "hidden",
          height: "1.2em",
          cursor: "pointer",
          whiteSpace: "nowrap",
        }}
      >
        <div
          className="original"
          style={{
            position: "relative",
            width: "100%",
          }}
        >
          {words}
        </div>
        <div
          className="clone"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
          }}
        >
          {words}
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center font-playfair">
        <h1 className="text-[3rem] md:text-[6rem] lg:text-[8rem] tracking-[-.1rem] leading-[4rem] md:leading-[7rem] lg:leading-[9rem] text-[#E7D7C5] relative font-extrabold">
          OLUWALOSEYI
          <span className="absolute right-[4rem] md:right-[8rem] lg:right-[14rem] top-[3rem] md:top-[5rem] lg:top-[8rem] uppercase tracking-widest text-white block text-sm md:text-base font-normal min-w-[10%]">
            Afrobeats
          </span>
        </h1>

        <h1 className="text-[3rem] md:text-[6rem] lg:text-[8rem] tracking-[-.1rem] leading-[4rem] md:leading-[7rem] lg:leading-[9rem] text-[#E7D7C5] font-extrabold">
          BALOGUN
        </h1>
      </div>
    </section>
  );
}
