"use client";
import cx from "classnames";
import { useState, useEffect } from "react";

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = ({ clientX, clientY }: MouseEvent) =>
      setMousePosition({ x: clientX, y: clientY });

    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

export const Spotlight = () => {
  const { x, y } = useMousePosition();
  return (
    <div
      className={cx(
        "pointer-events-none",
        "fixed",
        "inset-0",
        "z-30",
        "transition",
        "duration-300"
      )}
      style={{
        background: `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    />
  );
};
