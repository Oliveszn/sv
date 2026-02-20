"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContentWrapper from "../Common/ContentWrapper";
import ImagePlaceholder from "../Common/ImagePlaceholder";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function MainSection() {
  //   const [imageLoaded, setImageLoaded] = useState(false);
  //   {
  //     !imageLoaded && <ImagePlaceholder aspect="portrait" />;
  //   }
  const containerRef = useRef<HTMLDivElement | null>(null);
  const movingImageRef = useRef<HTMLDivElement | null>(null);
  const startPlaceholderRef = useRef<HTMLDivElement | null>(null);
  const endPlaceholderRef = useRef<HTMLDivElement | null>(null);
  const middleSectionRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   if (
  //     window.matchMedia("(pointer: coarse)").matches ||
  //     window.innerWidth < 768
  //   )
  //     return;
  //   const container = containerRef.current;
  //   const movingImage = movingImageRef.current;
  //   const startPlaceholder = startPlaceholderRef.current;
  //   const endPlaceholder = endPlaceholderRef.current;
  //   const middleSection = middleSectionRef.current;

  //   if (
  //     !container ||
  //     !movingImage ||
  //     !startPlaceholder ||
  //     !endPlaceholder ||
  //     !middleSection
  //   )
  //     return;

  //   // Get positions
  //   const getPositions = () => {
  //     const startRect = startPlaceholder.getBoundingClientRect();
  //     const endRect = endPlaceholder.getBoundingClientRect();
  //     const middleRect = middleSection.getBoundingClientRect();
  //     const containerRect = container.getBoundingClientRect();

  //     return {
  //       startX: startRect.left - containerRect.left,
  //       startY: startRect.top - containerRect.top,
  //       endX: endRect.left - containerRect.left,
  //       endY: endRect.top - containerRect.top,

  //       midX: (containerRect.width - startPlaceholder.offsetWidth) / 2,
  //       midY:
  //         middleRect.top -
  //         containerRect.top +
  //         middleRect.height / 2 -
  //         startPlaceholder.offsetHeight / 2,
  //     };
  //   };

  //   const positions = getPositions();

  //   // Set initial position
  //   gsap.set(movingImage, {
  //     position: "absolute",
  //     left: positions.startX,
  //     top: positions.startY,
  //     width: startPlaceholder.offsetWidth,
  //     height: startPlaceholder.offsetHeight,
  //   });

  //   // Create scroll animation
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: container,
  //       start: "top center",
  //       end: "bottom center",
  //       scrub: 1,
  //       markers: false, // Set to true to see scroll positions while debugging
  //     },
  //   });

  //   tl.to(movingImage, {
  //     left: positions.endX,
  //     top: positions.endY,
  //     ease: "none",
  //   }).to(movingImage, {
  //     left: positions.endX,
  //     top: positions.endY,
  //     ease: "power1.inOut",
  //   });

  //   // Handle resize
  //   const handleResize = () => {
  //     const newPositions = getPositions();

  //     gsap.set(movingImage, {
  //       width: startPlaceholder.offsetWidth,
  //       height: startPlaceholder.offsetHeight,
  //     });

  //     ScrollTrigger.refresh();
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  return (
    <section>
      <ContentWrapper>
        <div className="about flex flex-col gap-10">
          <div className="pl-[0%] lg:pl-[9%] md:max-w-5xl">
            <h2 className="font-playfair text-[#120d07] text-2xl lg:text-5xl font-bold capitalize leading-[2.5rem] md:leading-[3.5rem]">
              YKB, Whose Real Name Is Yusuf Oluwo, Is An Afropop Singer And
              Songwriter.
            </h2>
          </div>

          <div ref={containerRef} className="relative flex flex-col gap-20">
            {/* Moving Image */}
            {/* <div ref={movingImageRef} className="z-10">
              <ImagePlaceholder aspect="hello" />
            </div> */}

            {/* First Section */}
            <div className="flex flex-col md:flex-row items-start justify-start gap-10 md:gap-28">
              <div ref={startPlaceholderRef} className="w-full md:w-[25%]">
                <div className="opacit0">
                  <img
                    src="/artist1.png"
                    alt="first picture"
                    className="w-full max-w-[280px] aspect-[3/4] object-cover mx-auto md:mx-0"
                  />
                </div>
              </div>
              <div className="w-full md:w-[75%] flex flex-col gap-10 font-inter">
                <p className="text-[#2b2b2b] text-xl font-light leading-9 capitalize">
                  Born on March 6, he spent most of his childhood in Ketu,
                  Lagos, where he developed a deep inclination towards music.
                  From a young age, YKB displayed a natural talent and passion
                  for creating melodies, which eventually led him to pursue a
                  career in the music industry.
                </p>

                <p className="text-[#2b2b2b] text-xl font-light leading-9 capitalize">
                  YKB's music can be described as a seamless fusion of
                  Afrobeats, R&B, Trap, and Hip-hop, showcasing his versatility
                  as an artist. Drawing inspiration from his surroundings and
                  personal experiences, he weaves relatable narratives into his
                  songs, connecting with listeners on a deeper level. His lyrics
                  often touch on themes of love, relationships, and the
                  realities of life, resonating with a wide range of audiences.
                </p>
              </div>
            </div>

            {/* Middle Section */}
            <div
              ref={middleSectionRef}
              className="flex flex-col items-center gap-6 mx-auto w-full max-w-4xl"
            >
              <h2 className="font-playfair text-2xl md:text-4xl">
                Ykb is known for his smooth vocals and catchy melodies
              </h2>
              <div className="">
                <Image
                  src="/img3.8186d29f.jpg"
                  alt="about ykb"
                  width={980}
                  height={620}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Second Section */}
            <div className="flex flex-col md:flex-row items-start justify-start gap-10 md:gap-28">
              <div className="w-full md:w-[75%] flex flex-col gap-10 font-inter">
                <p className="text-[#2b2b2b] text-xl font-light leading-9 capitalize">
                  Born on March 6, he spent most of his childhood in Ketu,
                  Lagos, where he developed a deep inclination towards music.
                  From a young age, YKB displayed a natural talent and passion
                  for creating melodies, which eventually led him to pursue a
                  career in the music industry.
                </p>

                <p className="text-[#2b2b2b] text-xl font-light leading-9 capitalize">
                  YKB's music can be described as a seamless fusion of
                  Afrobeats, R&B, Trap, and Hip-hop, showcasing his versatility
                  as an artist. Drawing inspiration from his surroundings and
                  personal experiences, he weaves relatable narratives into his
                  songs, connecting with listeners on a deeper level. His lyrics
                  often touch on themes of love, relationships, and the
                  realities of life, resonating with a wide range of audiences.
                </p>
              </div>

              <div ref={endPlaceholderRef} className="w-full md:w-[25%]">
                <div className="opaci0">
                  <img
                    src="/artist2.png"
                    alt="second picture"
                    className="w-full max-w-[280px] aspect-[3/4] object-cover mx-auto md:mx-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
}
