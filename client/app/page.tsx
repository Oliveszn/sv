import AboutSection from "@/components/Home/AboutSection";
import HeroSection from "@/components/Home/HeroSection";
import MusicSection from "@/components/Home/MusicSection";
import VideoSection from "@/components/Home/VideoSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <AboutSection />
      <MusicSection />
      <VideoSection />
    </main>
  );
}
