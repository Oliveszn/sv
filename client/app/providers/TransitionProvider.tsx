"use client";
import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";

type TransitionContextType = {
  startTransition: (href: string, label?: string) => void;
};

const TransitionContext = createContext<TransitionContextType | null>(null);

export function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [label, setLabel] = useState("SEYI");

  const startTransition = (href: string, label = "") => {
    setLabel(label);
    setIsActive(true);

    // duration of animation
    setTimeout(() => {
      router.push(href);
      setIsActive(false);
    }, 2000);
  };

  return (
    <TransitionContext.Provider value={{ startTransition }}>
      {children}

      {/* Overlay */}
      {isActive && (
        <div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          ref={(el) => {
            if (!el) return;
            gsap.fromTo(
              el,
              { scaleY: 0 },
              { scaleY: 1, duration: 0.6, ease: "power3.out" },
            );
          }}
        >
          <h1 className="text-white text-4xl font-playfair animate-pulse">
            {label}
          </h1>
        </div>
      )}
    </TransitionContext.Provider>
  );
}

export const usePageTransition = () => {
  const ctx = useContext(TransitionContext);
  if (!ctx) throw new Error("Wrap app in TransitionProvider");
  return ctx;
};
