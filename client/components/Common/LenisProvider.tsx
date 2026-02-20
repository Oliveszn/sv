"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  //   useEffect(() => {
  //     // Initialize Lenis
  //     const lenis = new Lenis({
  //       duration: 1.2, // Animation duration in seconds
  //       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
  //       orientation: "vertical", // 'vertical' or 'horizontal'
  //       gestureOrientation: "vertical",
  //       smoothWheel: true,
  //       wheelMultiplier: 1,
  //       touchMultiplier: 2,
  //       infinite: false,
  //     });

  //     lenisRef.current = lenis;

  //     // Integrate with GSAP ScrollTrigger
  //     lenis.on("scroll", ScrollTrigger.update);

  //     gsap.ticker.add((time) => {
  //       lenis.raf(time * 1000);
  //     });

  //     gsap.ticker.lagSmoothing(0);

  //     // Cleanup
  //     return () => {
  //       lenis.destroy();
  //       gsap.ticker.remove(() => {});
  //     };
  //   }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // GSAP ScrollTrigger sync
    lenis.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) {
          lenis.scrollTo(value as number);
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    //   ScrollTrigger.addEventListener("refresh", () => lenis.update());
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
