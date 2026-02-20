import Link from "next/link";
import ContentWrapper from "../Common/ContentWrapper";
import HoverRevealLink from "../Common/HoverRevealLink";

export default function AboutSection() {
  return (
    <ContentWrapper>
      <div className="about flex flex-col gap-10">
        <div className="pl-[0%] lg:pl-[9%] ">
          <h2 className="font-playfair text-[#120d07] text-3xl lg:text-5xl font-extrabold">
            Ykb, The Artiste
          </h2>
        </div>

        <div className="flex flex-col gap-10 font-inter pl-[3rem] md:pl-[15%] lg:pl-[20%]">
          <p className="lg:max-w-[85%] text-[#2b2b2b] text-xl font-light leading-9 capitalize">
            Born on March 6, he spent most of his childhood in Ketu, Lagos,
            where he developed a deep inclination towards music. From a young
            age, YKB displayed a natural talent and passion for creating
            melodies, which eventually led him to pursue a career in the music
            industry. YKB's music can be described as a seamless fusion of
            Afrobeats, R&B, Trap, and Hip-hop, showcasing his versatility as an
            artist.
          </p>

          <p className="lg:max-w-[85%] text-[#2b2b2b] text-xl font-light leading-9 capitalize">
            YKB's music can be described as a seamless fusion of Afrobeats, R&B,
            Trap, and Hip-hop, showcasing his versatility as an artist.
          </p>

          {/* <Link
            href={"/about"}
            className="uppercase lg:max-w-[85%] text-[#A37642] text-xl font-light leading-9"
          >
            Get to know ykb
          </Link> */}
          <HoverRevealLink
            href="/about"
            target=""
            text="Get to know ykb"
            className="uppercase lg:max-w-[85%] text-[#A37642] text-xl font-light leading-9"
          />
        </div>
      </div>
    </ContentWrapper>
  );
}
