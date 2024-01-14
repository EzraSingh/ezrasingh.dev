import { SideNav } from "./SideNav";
import { Social, SocialProps } from "./Social";

export interface HeaderProps {
  social?: SocialProps;
}

export const Header: React.FC<HeaderProps> = ({ social = {} }) => (
  <aside className="lg:py-24 lg:sticky lg:top-0 lg:flex lg:flex-col lg:justify-between lg:max-h-screen lg:w-1/2">
    <header className="animate__animated animate__fadeIn animate__slow">
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        <a href="/">Ezra Singh</a>
      </h1>
      <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
        Software Engineer
      </h2>

      <p className="mt-4 max-w-xs leading-normal">
        From pixels to databases, I build performant and user-friendly
        applications 🚀
      </p>

      <SideNav />
    </header>

    <Social {...social} />
  </aside>
);
