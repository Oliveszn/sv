"use client";
import Link from "next/link";
import { useHoverReveal } from "@/hooks/useHoverReveal";

interface Props {
  href: string;
  text: string;
  className?: string;
  target?: string;
}

export default function HoverRevealLink({
  href,
  text,
  className,
  target,
}: Props) {
  const wrapperRef = useHoverReveal();

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

  return (
    <Link href={href} target={target}>
      <div
        ref={wrapperRef}
        className={`relative inline-block overflow-hidden cursor-pointer whitespace-nowrap ${className}`}
        style={{ height: "1.2em" }}
      >
        <div className="original relative w-full">{words}</div>
        <div className="clone absolute top-0 left-0 w-full">{words}</div>
      </div>
    </Link>
  );
}
