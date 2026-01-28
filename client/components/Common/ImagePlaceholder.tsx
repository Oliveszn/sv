type ImagePlaceholderProps = {
  aspect?: "square" | "portrait" | "landscape" | "hello";
};

export default function ImagePlaceholder({
  aspect = "square",
}: ImagePlaceholderProps) {
  const aspectMap = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
    hello: "h-72 w-60",
  };

  return (
    <div
      className={`
        ${aspectMap[aspect]}
        w-full
        bg-[#e7d7c5]/20
        animate-pulse
        rounded-md
      `}
    />
  );
}
