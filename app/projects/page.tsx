import Link from "next/link";
import { ProjectsGrid } from "@/app/partials";

// @ts-ignore
import content from "@/app/content/projects.yml";

export default function Projects() {
  return (
    <main className="lg:mx-32 md:mx-16">
      <header className="capitalize flex px-8 pt-8 items-center animate__animated animate__fadeInDown animate__slow animate__delay-1s">
        <Link
          href="/"
          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-base"
        >
          go home&nbsp;
          <span className="inline-block ml-2">{"/"}</span>
        </Link>
      </header>
      <ProjectsGrid projects={content.grid} />
    </main>
  );
}
