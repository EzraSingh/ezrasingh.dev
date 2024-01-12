"use client";
import cx from "classnames";
import useMousePosition from "@/hooks/useMousePosition";

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
