import { usePageTransition } from "@/app/providers/TransitionProvider";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "../Common/Svg/Logo";
import HamburgerBtn from "../Common/HamburgerBtn";
import gsap from "gsap";
import HoverRevealLink from "../Common/HoverRevealLink";

export default function NavHeader() {
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const overlayRef = useRef(null);
  const linksRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { startTransition } = usePageTransition();
  const pathname = usePathname();
  let links = [
    { name: "The artist", link: "/about" },
    { name: "The music", link: "/music" },
    { name: "The videos", link: "/videos" },
    { name: "The store", link: "https://www.garmspot.com/activ-yard/" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    if (!headerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          clearProps: "all",
        },
      );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!overlayRef.current) return;

    if (isMenuOpen) {
      // Open menu animation
      gsap.to(overlayRef.current, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.3,
        ease: "power2.out",
      });

      // Stagger fade in links from bottom
      gsap.fromTo(
        linksRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.2,
        },
      );
    } else {
      // Close menu animation
      gsap.to(overlayRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.3,
        ease: "power2.in",
      });

      gsap.to(linksRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.in",
      });
    }
  }, [isMenuOpen]);
  return (
    <header
      ref={headerRef}
      className="relative z-50 bg-transparent px-6 sm:px-8 lg:px-10 z-50"
    >
      <div className="flex items-center justify-between py-6 max-w-6xl mx-auto w-full">
        <button
          aria-label={`Go to home`}
          onClick={() => {
            if (pathname === "/") {
              return;
            }
            startTransition("/", "Yusuf KanBai");
          }}
          className="cursor-pointer"
        >
          <Logo />
        </button>

        <div className="hidden lg:flex items-center justify-center gap-6 font-inter">
          {links.map((items) => (
            <button
              key={items.name}
              onClick={() => {
                if (items.link.startsWith("http")) {
                  window.open(items.link, "_blank", "noopener,noreferrer");
                  return;
                }
                if (pathname === items.link) {
                  return;
                }
                startTransition(items.link, "Yusuf KanBai");
              }}
              aria-label={`Go to ${items.name}`}
              className="text-white cursor-pointer inline-block text-base list-none relative no-underline uppercase relative group cursor-pointer"
            >
              {items.name}
              <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#E7D7C5] transition-all duration-500 ease-out group-hover:w-full"></span>
            </button>
          ))}
        </div>

        <div className="hidden lg:flex text-[#E7D7C5] text-xl uppercase items-start cursor-pointer flex gap-4 justify-start font-playfair">
          <HoverRevealLink
            href="#"
            target=""
            text="For bookings"
            className="inline-block"
          />
        </div>

        <div
          className="cursor-pointer lg:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          <HamburgerBtn isOpen={isMenuOpen} />
        </div>
      </div>

      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center opacity-0 pointer-events-none lg:hidden"
      >
        <div
          className="absolute top-6 right-6 cursor-pointer"
          onClick={toggleMenu}
        >
          <HamburgerBtn isOpen={isMenuOpen} />
        </div>

        <nav className="flex flex-col items-center gap-8">
          {links.map((item, index) => (
            <button
              key={item.name}
              onClick={() => {
                if (item.link.startsWith("http")) {
                  window.open(item.link, "_blank", "noopener,noreferrer");
                  toggleMenu();
                  return;
                }
                if (pathname === item.link) {
                  toggleMenu();
                  return;
                }

                startTransition(item.link, "Yusuf Kanbai");
                toggleMenu();
              }}
              aria-label={`Go to ${item.name}`}
              ref={(el) => {
                linksRef.current[index] = el;
              }}
              className="text-white text-3xl sm:text-4xl font-inter capitalize opacity-0 hover:text-[#E7D7C5] transition-colors relative group cursor-pointer"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#E7D7C5] transition-all duration-500 ease-out group-hover:w-full"></span>
            </button>
          ))}

          <div
            ref={(el) => {
              linksRef.current[links.length] = el as any;
            }}
            className="text-[#E7D7C5] text-2xl sm:text-3xl uppercase font-playfair mt-8 opacity-0 cursor-pointer"
          >
            For bookings
          </div>
        </nav>
      </div>
    </header>
  );
}
