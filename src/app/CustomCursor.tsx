"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const SIZE = 34;

export default function CustomCursor() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rotation = useMotionValue(0);
  const scaleRaw = useMotionValue(1);
  const scale = useSpring(scaleRaw, { stiffness: 320, damping: 22 });

  useEffect(() => {
    // Añadir clase al body solo mientras este componente esté montado
    document.body.classList.add("balones-cursor");

    let prevX = 0;
    let prevY = 0;

    function onMove(e: MouseEvent) {
      // Actualización directa al DOM — sin lag, sin React
      if (wrapperRef.current) {
        wrapperRef.current.style.transform = `translate(${e.clientX - SIZE / 2}px, ${e.clientY - SIZE / 2}px)`;
      }
      const dx = e.clientX - prevX;
      const dy = e.clientY - prevY;
      const speed = Math.sqrt(dx * dx + dy * dy);
      if (speed > 0.8) rotation.set(rotation.get() + speed * 1.6);
      prevX = e.clientX;
      prevY = e.clientY;
    }

    function onOver(e: MouseEvent) {
      if ((e.target as Element).closest("a, button, article")) scaleRaw.set(1.65);
    }

    function onOut(e: MouseEvent) {
      if (!(e.relatedTarget as Element | null)?.closest("a, button, article")) scaleRaw.set(1);
    }

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      document.body.classList.remove("balones-cursor");
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [rotation, scaleRaw]);

  return (
    <div
      ref={wrapperRef}
      className="pointer-events-none fixed left-0 top-0 z-9999"
      style={{ willChange: "transform" }}
    >
      <motion.img
        src="/balon wilson.png"
        alt=""
        draggable={false}
        className="select-none"
        style={{ width: SIZE, height: SIZE, rotate: rotation, scale }}
      />
    </div>
  );
}
