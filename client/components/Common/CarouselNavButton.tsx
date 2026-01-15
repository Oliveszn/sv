import ArrowLeft from "./Svg/ArrowLeft";
import ArrowRight from "./Svg/ArrowRight";

type CarouselNavButtonProps = {
  direction: "prev" | "next";
  onClick?: () => void;
  className?: string;
};

export default function CarouselNavButton({
  direction,
  onClick,
  className = "",
}: CarouselNavButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
      className={`
        bg-[#f5eee6]
        rounded-full
        shadow-[inset_3px_-3px_9px_#cacaca]
        cursor-pointer
        p-[1.3rem]
        transition-all
        duration-500
        ease-in-out
        ${className}
      `}
    >
      {direction === "prev" ? <ArrowLeft /> : <ArrowRight />}
    </button>
  );
}
