"use client";
import { NavItem } from "@/app/components";
import cx from "classnames";
import { useEffect, useState } from "react";

export const SideNav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => setScrollPosition(window.scrollY);

    window.addEventListener("scroll", updatePosition);

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return (
    <nav
      className="nav animate__animated animate__fadeIn animate__slow animate__delay-1s"
      aria-label="Page links"
    >
      <ul className="hidden lg:block mt-16 w-max">
        <NavItem href="#about">about</NavItem>
        <NavItem href="#experience">experience</NavItem>
        <NavItem href="/projects">projects</NavItem>
        <NavItem href="https://blinq.me/LiyYt7vR2nX3">lets talk</NavItem>
      </ul>
      <a
        className="fixed right-4 top-4 z-50 lg:hidden capitalize"
        href="https://blinq.me/LiyYt7vR2nX3"
      >
        <button className="capitalize max-w-max bg-blue-600 hover:bg-blue-500 text-white py-1 lg:py-2 px-3 lg:px-4 transition-all border-b-4 border-blue-500 hover:border-blue-400 rounded">
          lets talk
        </button>
      </a>
    </nav>
  );
};
