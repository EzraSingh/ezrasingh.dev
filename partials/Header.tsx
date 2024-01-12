import cx from "classnames";
import { FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa";
import { NavItem } from "@/components";

const containerClass = cx(
  "lg:sticky",
  "lg:top-0",
  "lg:flex",
  "lg:max-h-screen",
  "lg:w-1/2",
  "lg:flex-col",
  "lg:justify-between",
  "lg:py-24",
  "animate__animated",
  "animate__fadeIn",
  "animate__slow"
);

const titleClass = cx(
  "text-4xl",
  "font-bold",
  "tracking-tight",
  "text-slate-200",
  "sm:text-5xl"
);

const subtitleClass = cx(
  "mt-3",
  "text-lg",
  "font-medium",
  "tracking-tight",
  "text-slate-200",
  "sm:text-xl"
);

export const Header = () => (
  <header className={containerClass}>
    <div>
      <h1 className={titleClass}>
        <a href="/">Ezra Singh</a>
      </h1>
      <h2 className={subtitleClass}>Software Engineer</h2>
      <p className="mt-4 max-w-xs leading-normal">
        From pixels to databases, I build performant and user-friendly
        applications 🚀
      </p>
      <nav className="nav hidden lg:block" aria-label="Page links">
        <ul className="mt-16 w-max">
          <NavItem href="#about">about</NavItem>
          <NavItem href="#experience">experience</NavItem>
          <NavItem href="#projects">projects</NavItem>
        </ul>
      </nav>
    </div>
    <ul className="ml-1 mt-8 flex items-center">
      <li className="mr-5 text-3xl">
        <a className="block hover:text-slate-200" target="_blank" href="#">
          <FaGithub />
        </a>
      </li>
      <li className="mr-5 text-3xl">
        <a className="block hover:text-slate-200" target="_blank" href="#">
          <FaGitlab />
        </a>
      </li>
      <li className="mr-5 text-3xl">
        <a className="block hover:text-slate-200" target="_blank" href="#">
          <FaLinkedin />
        </a>
      </li>
    </ul>
  </header>
);
