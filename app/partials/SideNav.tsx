import { NavItem } from "@/app/components";

export const SideNav = () => {
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
    </nav>
  );
};
