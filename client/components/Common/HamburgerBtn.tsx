interface HamburgerBtnProps {
  isOpen: boolean;
}
export default function HamburgerBtn({ isOpen }: HamburgerBtnProps) {
  return (
    <div className="w-[5rem]">
      <div className="text-2xl text-[#E7D7C5] font-bold tracking-wider">
        {isOpen ? "CLOSE" : "MENU"}
      </div>
    </div>
  );
}
