import cx from "classnames";
import { Header, AboutMe, Experience, Footer, MyProjects } from "@/partials";

// @ts-ignore
import content from "@/content/home.yml";

const containerClass = cx(
  "mx-auto",
  "min-h-screen",
  "max-w-screen-xl",
  "px-6",
  "py-12",
  "font-sans",
  "md:px-12",
  "md:py-20",
  "lg:px-24",
  "lg:py-0"
);

export default function Home() {
  return (
    <div className={containerClass}>
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <main className="pt-24 lg:w-1/2 lg:py-24">
          <AboutMe />
          <Experience content={content.experience} />
          <MyProjects content={content.projects} />
          <Footer />
        </main>
      </div>
    </div>
  );
}
