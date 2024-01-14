import { NavItem } from "@/app/components";

export const SideNav = () => (
  <nav
    className="nav hidden lg:block animate__animated animate__fadeIn animate__slow animate__delay-3s"
    aria-label="Page links"
  >
    <ul className="mt-16 w-max">
      <NavItem href="#about">about</NavItem>
      <NavItem href="#experience">experience</NavItem>
      <NavItem href="#projects">projects</NavItem>
    </ul>
  </nav>
);
