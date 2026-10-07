import React, { useEffect, useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function CustomCursor() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isDesktop) return;

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e) => {
      if (
        e.target.tagName === "A" ||
        e.target.tagName === "BUTTON" ||
        e.target.closest("a") ||
        e.target.closest("button")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full transition-transform duration-150 ease-out transform -translate-x-1/2 -translate-y-1/2 ${
        isHovered
          ? "w-10 h-10 bg-white/10 border border-white/40 scale-125"
          : "w-4 h-4 bg-white/20 border border-white/60 scale-100"
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}
