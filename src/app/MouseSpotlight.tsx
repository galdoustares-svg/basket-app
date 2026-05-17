"use client";

import { useEffect, useRef } from "react";

export default function MouseSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      if (ref.current) {
        ref.current.style.background = `radial-gradient(700px circle at ${e.clientX}px ${e.clientY}px, rgba(139,92,246,0.07), transparent 65%)`;
      }
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-0 transition-[background] duration-100"
      aria-hidden="true"
    />
  );
}
