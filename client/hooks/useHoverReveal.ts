"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const useHoverReveal = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const original = wrapper.querySelectorAll(".original span");
    const clone = wrapper.querySelectorAll(".clone span");

    gsap.set(clone, { y: 40 });

    const enter = () => {
      gsap.to(original, {
        y: -40,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.12,
      });

      gsap.to(clone, {
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.12,
      });
    };

    const leave = () => {
      gsap.to(original, {
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.12,
      });

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

  return wrapperRef;
};
