import ContentWrapper from "./ContentWrapper";

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#F3EBE2]">
      <ContentWrapper>
        <div className="text-center flex flex-col gap-4 ">
          <h1 className="uppercase text-5xl leading-10 text-[#2b2b2b] font-extrabold font-playfair">
            For bookings and informations
          </h1>
          <span className="text-[#594024] font-bold text-2xl font-playfair">
            info@yusufkanbai.com
          </span>
        </div>
        {/* <div className="flex flex-wrap items-center justify-between gap-6">
          
          <div className="order-1 text-3xl font-bold">NSNV</div>

         
          <div className="order-3 w-full flex justify-center gap-6 text-sm md:order-2 md:w-auto">
            <span>Instagram</span>
            <span>Twitter</span>
            <span>Snapchat</span>
          </div>

         
          <div className="order-2 flex gap-6 md:order-3">
            <span>Spotify</span>
            <span>Apple Music</span>
            <span>YouTube Music</span>
            <span>Deezer</span>
          </div>
        </div> */}
      </ContentWrapper>
    </footer>
  );
}
