import Link from "next/link";
import { ProjectsGrid } from "@/partials";
import { RiArrowGoBackFill } from "react-icons/ri";

// @ts-ignore
import content from "@/content/projects.yml";

export default function Projects() {
  return (
    <main className="lg:mx-32 md:mx-16">
      <header className="flex px-8 pt-8 items-center animate__animated animate__fadeInDown animate__faster">
        <Link
          href="/"
          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-base"
        >
          Go Back&nbsp;
          <span className="inline-block ml-2">
            <RiArrowGoBackFill />
          </span>
        </Link>
      </header>
      <ProjectsGrid projects={content.projects} />
    </main>
  );
}
