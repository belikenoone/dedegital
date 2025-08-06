// components/LenisScroller.tsx
"use client"; // if using app directory
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisScroller({
  children,
}: {
  children: React.ReactNode;
}) {
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
    });

    function update(time: number) {
      lenis.raf(time);
      raf.current = requestAnimationFrame(update);
    }

    raf.current = requestAnimationFrame(update);

    return () => {
      if (raf.current !== null) {
        cancelAnimationFrame(raf.current);
      }
    };
  }, []);

  return <>{children}</>;
}
